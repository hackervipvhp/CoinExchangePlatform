# encoding: UTF-8
# frozen_string_literal: true

class Order < ActiveRecord::Base
  include BelongsToMarket
  include BelongsToMember

  extend Enumerize
  enumerize :state, in: {wait: 100, done: 200, cancel: 0}, scope: true

  TYPES = %w[ market limit ]
  enumerize :ord_type, in: TYPES, scope: true

  # skip market type orders, they should not appear on trading-ui
  after_commit :trigger_pusher_event

  before_validation :fix_number_precision, on: :create

  validates :ord_type, :volume, :origin_volume, :locked, :origin_locked, presence: true
  validates :price, numericality: {greater_than: 0}, if: ->(order) {order.ord_type == 'limit'}
  validate :market_order_validations, if: ->(order) {order.ord_type == 'market'}

  WAIT = 'wait'
  DONE = 'done'
  CANCEL = 'cancel'

  HOUSECOIN = 'afcash'

  scope :done, -> {with_state(:done)}
  scope :active, -> {with_state(:wait)}

  before_validation(on: :create) do
    self.fee = config.public_send("#{kind}_fee") unless self.member.zero_fee?
    # self.fee = 0 if this.member.zero_fee?
  end

  after_commit on: :create do
    next unless ord_type == 'limit'
    EventAPI.notify ['market', market_id, 'order_created'].join('.'), \
      Serializers::EventAPI::OrderCreated.call(self)
  end

  after_commit on: :update do
    next unless ord_type == 'limit'

    event = case previous_changes.dig('state', 1)
            when 'cancel' then
              'order_canceled'
            when 'done' then
              'order_completed'
            else
              'order_updated'
            end

    EventAPI.notify ['market', market_id, event].join('.'), \
      Serializers::EventAPI.const_get(event.camelize).call(self)
  end

  def funds_used
    origin_locked - locked
  end

  def config
    market
  end

  def calculate_reward
    return unless state == 200
    return if member.zero_fee?

    unless [ask, bid].include?(HOUSECOIN)
      rewards = fee * funds_received * rate
      trans_mine = Reward.new do |r|
        r.member_id = member.id
        r.order_id = id
        r.ref_type = 'TransMineReward'
        r.amount = rewards * 0.15
      end
      if trans_mine.save
        member.ac(HOUSECOIN).plus_funds!(trans_mine.amount)
        Rails.logger.info {trans_mine}
      end

      if member.ref_member_id
        ref_member = Member.find member.ref_member_id
        if ref_member
          ref_rewards = Reward.new do |r|
            r.member_id = member.ref_member_id
            r.ref_member_id = member.id
            r.order_id = id
            r.ref_type = 'ReferralRewards'
            r.amount = rewards * 0.15
          end
          if ref_rewards.save
            ref_member.ac(HOUSECOIN).plus_funds!(ref_rewards.amount)
            Rails.logger.info {ref_rewards}
          end
        end
      end
    end

  end

  def trigger_pusher_event
    return if ord_type != 'limit'

    Member.trigger_pusher_event member_id, :order, \
      id: id,
                                at: at,
                                market: market_id,
                                kind: kind,
                                price: price&.to_s('F'),
                                state: state,
                                volume: volume.to_s('F'),
                                origin_volume: origin_volume.to_s('F')
  end

  def kind
    self.class.name.underscore[-3, 3]
  end

  def at
    created_at.to_i
  end

  def self.head(currency)
    active.with_market(currency).matching_rule.first
  end

  def to_matching_attributes
    {id: id,
     market: market_id,
     type: type[-3, 3].downcase.to_sym,
     ord_type: ord_type,
     volume: volume,
     price: price,
     locked: locked,
     timestamp: created_at.to_i}
  end

  def fix_number_precision
    self.price = config.fix_number_precision(:bid, price.to_d) if price

    if volume
      self.volume = config.fix_number_precision(:ask, volume.to_d)
      self.origin_volume = origin_volume.present? ? config.fix_number_precision(:ask, origin_volume.to_d) : volume
    end
  end

  private

  def ccy
    if type == 'OrderAsk'
      bid
    else
      ask
    end
  end

  def rate
    r_price = Global[HOUSECOIN.to_s + ccy.to_s].ticker[:last]
    if r_price.nil? || r_price == 0
      r_price = 1.to_d
    end
    1 / r_price
  end

  def is_limit_order?
    ord_type == 'limit'
  end

  def market_order_validations
    errors.add(:price, 'must not be present') if price.present?
  end

  FUSE = '0.9'.to_d

  def estimate_required_funds(price_levels)
    required_funds = Account::ZERO
    expected_volume = volume

    start_from, _ = price_levels.first
    filled_at = start_from

    until expected_volume.zero? || price_levels.empty?
      level_price, level_volume = price_levels.shift
      filled_at = level_price

      v = [expected_volume, level_volume].min
      required_funds += yield level_price, v
      expected_volume -= v
    end

    raise "Market is not deep enough" unless expected_volume.zero?
    raise "Volume too large" if (filled_at - start_from).abs / start_from > FUSE

    required_funds
  end

end

# == Schema Information
# Schema version: 20190418120847
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  bid            :string(10)       not null
#  ask            :string(10)       not null
#  market_id      :string(20)       not null
#  price          :decimal(32, 16)
#  volume         :decimal(32, 16)  not null
#  origin_volume  :decimal(32, 16)  not null
#  fee            :decimal(32, 16)  default(0.0), not null
#  state          :integer          not null
#  type           :string(8)        not null
#  member_id      :integer          not null
#  ord_type       :string           not null
#  locked         :decimal(32, 16)  default(0.0), not null
#  origin_locked  :decimal(32, 16)  default(0.0), not null
#  funds_received :decimal(32, 16)  default(0.0)
#  trades_count   :integer          default(0), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  stop_loss      :boolean          default(FALSE)
#
# Indexes
#
#  index_orders_on_member_id                     (member_id)
#  index_orders_on_state                         (state)
#  index_orders_on_type_and_market_id            (type,market_id)
#  index_orders_on_type_and_member_id            (type,member_id)
#  index_orders_on_type_and_state_and_market_id  (type,state,market_id)
#  index_orders_on_type_and_state_and_member_id  (type,state,member_id)
#

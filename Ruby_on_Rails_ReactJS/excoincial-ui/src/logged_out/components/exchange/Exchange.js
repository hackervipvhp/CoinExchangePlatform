import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import LandingSection from "./Landing";
import TradingViewWidget from "react-tradingview-widget";


function Exchange(props) {
  const { selectExchange } = props;
  useEffect(() => {
    selectExchange();
  }, [selectExchange]);
  return (
    <Fragment>
      <LandingSection />
      <TradingViewWidget
        symbol="BTC/USD"
      />
    </Fragment>
  );
}

Exchange.propTypes = {
  selectExchange: PropTypes.func.isRequired
};

export default Exchange;

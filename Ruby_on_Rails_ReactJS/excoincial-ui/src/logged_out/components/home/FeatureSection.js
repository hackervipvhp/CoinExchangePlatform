import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import HighlySecuredImage from "../../../assets/images/Features Icons/Highly-secured.png";
import TwoFactorImage from "../../../assets/images/Features Icons/Two-Factor-Authentication-(2FA)-for-further-wallet-protection..png";
import ElasticImage from "../../../assets/images/Features Icons/Elastic-Multi.png";
import ScalablePlatformImage from "../../../assets/images/Features Icons/Scalable.png";
import OwnAPIImage from "../../../assets/images/Features Icons/Own.png";
import FiatCurrencyImage from "../../../assets/images/Features Icons/80+-Fiat-Currency-&-Cryptocurrency-Trading-Pairs.png";
import MarginTradingImage from "../../../assets/images/Features Icons/Margin.png";
import MarginLendingImage from "../../../assets/images/Features Icons/Marginlending.png";
import VeryLowImage from "../../../assets/images/Features Icons/Very-Low.png";
import EasyWayImage from "../../../assets/images/Features Icons/Easy-way-to.png";
import UltraFastImage from "../../../assets/images/Features Icons/Ultra-Fast.png";
import MilitaryGradeImage from "../../../assets/images/Features Icons/Military-grade.png";
import OrderBookImage from "../../../assets/images/Features Icons/Orderbook-with.png";
import SystemForImage from "../../../assets/images/Features Icons/System-For.png";
import IntegratedImage from "../../../assets/images/Features Icons/Integrated.png";
import SecurityImage from "../../../assets/images/Features Icons/Security-with.png";

const iconSize = 30;

const features = [
  {
    name: "highlySecured",
    content: "Highly secured users wallets",
    icon: HighlySecuredImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0"
  },
  {
    name: "TwoFactor",
    content: "Two Factor Authentication (2FA) for further wallet protection",
    icon: TwoFactorImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "Elastic",
    content: "Elastic Multi-Signature wallet strategy which allows us to store about 90% of the exchange's coins offline",
    icon: ElasticImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
    hasOverflow: true,
  },
  {
    name: "ScalablePlatform",
    content: "Scalable Platform",
    icon: ScalablePlatformImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "OwnAPI",
    content: "Own API",
    icon: OwnAPIImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "FiatCurrency",
    content: "80+ Fiat Currency & Cryptocurrency Trading Pairs",
    icon: FiatCurrencyImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "MarginTrading",
    content: "Margin Trading",
    icon: MarginTradingImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "MarginLending",
    content: "Margin Lending",
    icon: MarginLendingImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "VeryLow",
    content: "Very Low Transaction Fee",
    icon: VeryLowImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "EasyWay",
    content: "Easy way to make money",
    icon: EasyWayImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "UltraFast",
    content: "Ultra-Fast Exchange",
    icon: UltraFastImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "MilitaryGrade",
    content: "Military grade security source",
    icon: MilitaryGradeImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "OrderBook",
    content: "Orderbook with Matching Engine",
    icon: OrderBookImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "SystemFor",
    content: "System For KYC/AML Verification",
    icon: SystemForImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "Integrated",
    content: "Integrated Liquidity & API",
    icon: IntegratedImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  },
  {
    name: "Security",
    content: "Security with Escrow Accuracy",
    icon: SecurityImage,
    lgDelay: "0",
    mdDelay: "0",
    smDelay: "0",
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          FEATURES
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? (isWidthUp("lg", width)?element.lgDelay:element.mdDelay) : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  content={element.content}
                  hasOverflow={element.hasOverflow?true:false}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);

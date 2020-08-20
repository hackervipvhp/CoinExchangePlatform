import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  withWidth,
  Grid,
  Typography,
  Tabs,
  Tab
} from "@material-ui/core";
import landingImage from "../../../assets/images/Main-Home-page-banner.png";
import marketImage1 from "../../../assets/images/first-add.png";
import marketImage2 from "../../../assets/images/sec-add.png";
import marketImage3 from "../../../assets/images/thired-add.png";

const styles = theme => ({
  landingBackgroundImage: {
    display: `flex`,
    justifyContent: `center`,
    background: `url("${landingImage}") center center no-repeat`,
    paddingTop: 200,
    paddingBottom: 100,
  },
  marketImage: {
    padding: theme.spacing(2),
  },
  bestSeller: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  bestSellerItem: {
    color: theme.palette.background.default,
    display: `flex`,
    justifyContent: `center`,
  },
  transactions: {
    backgroundColor: theme.palette.background.default,
  }
});

function HeadSection(props) {
  const { classes } = props;
  const [ tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Fragment>
      <div key={"market-landing-1"} className={classes.landingBackgroundImage} >
        <img src={marketImage1} className={classes.marketImage} alt=""/>
        <img src={marketImage2} className={classes.marketImage} alt=""/>
        <img src={marketImage3} className={classes.marketImage} alt=""/>
      </div>
      <div key={"market-best-seller-1"} className={classes.bestSeller}>
        <Grid container>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6">
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6">
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6">
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6">
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div key={"market-transactions-1"} className={classes.transactions}>
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Favorites" />
          <Tab label="EXL" />
          <Tab label="AFCASH" />
          <Tab label="BTC" />
          <Tab label="ALTS" />
          <Tab label="FIAT" />
        </Tabs>
      </div>
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);

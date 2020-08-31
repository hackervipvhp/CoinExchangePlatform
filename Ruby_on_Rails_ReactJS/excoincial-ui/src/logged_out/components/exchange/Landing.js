import React, {Fragment } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  withWidth,
  Grid,
  Typography,
} from "@material-ui/core";
import landingImage from "../../../assets/images/Main-Home-page-banner.png";
import buyImage from "../../../assets/images/icons/icon.png";

const styles = theme => ({
  landingBackgroundImage: {
    display: `flex`,
    justifyContent: `center`,
    background: `url("${landingImage}") center center no-repeat`,
    paddingTop: 50,
    paddingBottom: 50,
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
  },
  icon:{
    paddingLeft:'10px', 
    paddingRight:'10px'
  },
  icontext:{
    [theme.breakpoints.down('md')]:{
      paddingLeft:'10px'
    },
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'10px'
    },
  }
});

function HeadSection(props) {
  const { classes } = props;

  return (
    <Fragment>
      <div key={"market-landing-1"} className={classes.landingBackgroundImage} >
      </div>
      <div key={"market-best-seller-1"} className={classes.bestSeller}>
        <Grid container>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6" className={classes.icontext}>
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
              <img src={buyImage} alt="Buy" className={classes.icon}/>
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6" className={classes.icontext}>
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
              <img src={buyImage} alt="Buy" className={classes.icon}/>
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6" className={classes.icontext}>
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
              <img src={buyImage} alt="Buy" className={classes.icon}/>
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.bestSellerItem}>
            <Typography variant="h6" className={classes.icontext}>
              BUST/USDT
            </Typography>
            <Typography variant="overline">
              &nbsp;33517.1 BUSD
              <img src={buyImage} alt="Buy" className={classes.icon}/>
            </Typography>
            <Typography variant="overline">
              &nbsp;Large Buy 22:41:56
            </Typography>
          </Grid>
        </Grid>
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

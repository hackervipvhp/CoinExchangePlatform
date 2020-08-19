import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Button,
  withStyles,
  withWidth,
  TextField,
  MenuItem
} from "@material-ui/core";
import tableSectionImage from "../../../assets/images/table-bg.png";
import landingImage from "../../../assets/images/Main-Home-page-banner.png";
import reviewImage from "../../../assets/images/trustpiol.png";

const styles = theme => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
    height: `100%`,
    // backgroundColor: theme.palette.secondary.main,
    // paddingBottom: theme.spacing(2)
  },
  container: {
    background: `url(${landingImage}) center no-repeat`,
    backgroundSize: `100% 100%`,
    height: `100%`,
  },
  reviewImage: {
    width: `145px`,
    paddingTop: `250px`,
    marginLeft: `auto`,
    marginRight: `auto`
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  },
  landingText: {
    color: `#fff`,
    fontSize: `36px`,
    width: `100%`,
    lineSpacing: `0.08em`,
    textAlign: `center`
  },
  contactUS:{
    boxShadow: theme.shadows[6],
    backgroundColor: `#fff`,
    display: `flex`,
    width: `60vw`,
    [theme.breakpoints.down("sm")]: {
      width: `90vw`
    },
    marginLeft: `auto`,
    marginRight: `auto`,
    marginTop: `200px`,
    borderLeft: `5px solid red`,
    borderRadius: 10,
    padding: `0 30px`
  },
  coinInput: {
    padding: `30px 10px 10px 0px`
  },
  coinInput1: {
    padding: `30px 30px 50px 0px`,
    [theme.breakpoints.down("md")]: {
      padding: `0px 30px 50px 0px`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: `0px 10px 20px 0px`,
    }
  },
  coinInput2: {
    padding: `90px 30px 50px 0px`,
    [theme.breakpoints.down("md")]: {
      padding: `60px 30px 50px 0px`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: `0px 10px 50px 0px`,
    }
  },
  forHeight: {
    height: 150,
    [theme.breakpoints.down("md")]: {
      height: 250,
    },
    [theme.breakpoints.down("sm")]: {
      height: 300,
    }
  },
  coinInputTextField: {
    display: `flex`,
  },
  buyBTCButton: {
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.h6.fontWeight,
		color: theme.palette.common.white,
    height: `100%`,
    marginTop: `8px`,
  },
  tableSection: {
    background: `url(${tableSectionImage}) center no-repeat`,
    backgroundSize: `100% 100%`,
    height: '800px'
  },
  markets: {

  }
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const coins = [
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'EUR',
    label: '€',
  },  
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


function HeadSection(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.reviewImage}>
            <img
              src={reviewImage}
              alt=""
            />
          </div>
          <h1 className={classes.landingText}>
            The most <strong style={{color:`red`}}>TRUSTED</strong> platform <br></br>for trading <strong style={{color:`red`}}>FIAT</strong> & <strong style={{color:`red`}}>CRYPTOCURRENCIES</strong>
          </h1>
          <p style={{color: `#fff`, fontSize: `16px`, lineHeight: `24px`, lineSpacing: `0.03em`, textAlign: `center`}}>
            We offer newbies and professional traders the possibility to trade a variety of digital<br></br> assets on a highly secure, insurance backed Exchange platform.
          </p>
          <div className={classes.forHeight}>
            <form className={classes.root} noValidate autoComplete="off">
              <Grid className={classes.contactUS} container>
                <Grid item xl={6} lg={6} md={12}  sm={12} xs={12}>
                  <div className={classes.coinInput}>
                    <h3>I WANT TO SPLURGE</h3>
                    <div className={classes.coinInputTextField}>
                      <TextField color="primary" variant="outlined" style={{width: `70%`}}></TextField>
                      <TextField color="primary" select variant="outlined" value={"USD"} style={{width: `30%`}}>
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </div>
                </Grid>
                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <div className={classes.coinInput1}>
                    <h3>I WANT TO BUY</h3>
                    <div className={classes.coinInputTextField}>
                      <TextField color="primary" select variant="outlined" value={"BTC"} style={{width: `100%`}}>
                        {coins.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </div>
                </Grid>
                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <div className={classes.coinInput2}>
                    <Button key={`buy-btc`} classes={{ text: classes.buyBTCButton }} style={{width: `100%`}}>BUY BTC</Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
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

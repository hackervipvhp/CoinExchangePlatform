import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  withWidth,
  Typography,
  Grid,
  Button
} from "@material-ui/core";
import latestNewsSectionImage from "../../../assets/images/news-bg.png";

const styles = theme => ({
  latestNewsSection: {
    background: `url(${latestNewsSectionImage}) center no-repeat`,
    backgroundSize: `cover`,
    height: '100%',
    padding: `80px 10% 60px 10%`
  },
  latestNewsText: {
    color: `#fff`,
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 30,
    paddingLeft: 30
  },
  newsItem:{
    boxShadow: theme.shadows[6],
    backgroundColor: `#0F1935`,
    borderRadius: `10px`,
    marginLeft: 20,
    marginTop:20,
    padding: 20,
  },
  newsItemTitle: {
    color: theme.palette.background.default,
    fontSize: 24,
    fontWeight: 500,
  },
  newsItemDateTime:{
    color: theme.palette.background.default,
    fontSize: 17,
    paddingTop: 15,
  },
  newsItemContent: {
    color: theme.palette.background.default,
    fontSize: 16,
    paddingTop: 25,
  },
  newsItemReadMore: {
    color: theme.palette.primary.main,
    fontSize: 18,
    fontWeight: `normal`
  },
  headerButton: {
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.h6.fontWeight,
		color: theme.palette.common.white,
    height: `100%`,
    width: `10%`,
    marginLeft:`45%`,
    marginTop: `5vh`,
  },
});

function latestNewsSection(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div key={`latest-news-background-div`} className={classes.latestNewsSection}>
        <Typography className={classes.latestNewsText}>
          Latest News
        </Typography>
        <Grid container>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <div key={`news-item-1`} className={classes.newsItem}>
              <Typography className={classes.newsItemTitle}>
                Crypto can I use to purchase
              </Typography>
              <Typography className={classes.newsItemDateTime}>
                15 june, 2020 3min
              </Typography>
              <Typography className={classes.newsItemContent}>
                Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis comparison of neurons in which will be self-corrected, based on the history.
              </Typography>
              <Typography className={classes.newsItemReadMore}>
                <br/>
                <a href="#" style={{color:`red`}}>READ MORE...</a>
              </Typography>
            </div>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <div key={`news-item-1`} className={classes.newsItem}>
              <Typography className={classes.newsItemTitle}>
                Crypto can I use to purchase
              </Typography>
              <Typography className={classes.newsItemDateTime}>
                15 june, 2020 3min
              </Typography>
              <Typography className={classes.newsItemContent}>
                Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis comparison of neurons in which will be self-corrected, based on the history.
              </Typography>
              <Typography className={classes.newsItemReadMore}>
                <br/>
                <a href="#" style={{color:`red`}}>READ MORE...</a>
              </Typography>
            </div>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <div key={`news-item-1`} className={classes.newsItem}>
              <Typography className={classes.newsItemTitle}>
                Crypto can I use to purchase
              </Typography>
              <Typography className={classes.newsItemDateTime}>
                15 june, 2020 3min
              </Typography>
              <Typography className={classes.newsItemContent}>
                Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis comparison of neurons in which will be self-corrected, based on the history.
              </Typography>
              <Typography className={classes.newsItemReadMore}>
                <br/>
                <a href="#" style={{color:`red`}}>READ MORE...</a>
              </Typography>
            </div>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <div key={`news-item-1`} className={classes.newsItem}>
              <Typography className={classes.newsItemTitle}>
                Crypto can I use to purchase
              </Typography>
              <Typography className={classes.newsItemDateTime}>
                15 june, 2020 3min
              </Typography>
              <Typography className={classes.newsItemContent}>
                Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis comparison of neurons in which will be self-corrected, based on the history.
              </Typography>
              <Typography className={classes.newsItemReadMore}>
                <br/>
                <a href="#" style={{color:`red`}}>READ MORE...</a>
              </Typography>
            </div>
          </Grid>
          <Button key={`buy-sell`} classes={{ text: classes.headerButton }}>BUY EXL</Button>
        </Grid>
      </div>
    </Fragment>
  );
}

latestNewsSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(latestNewsSection)
);

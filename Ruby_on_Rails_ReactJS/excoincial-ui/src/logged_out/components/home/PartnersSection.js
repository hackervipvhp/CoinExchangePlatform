import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  withStyles,
  withWidth,
  Typography,
  Grid
} from "@material-ui/core";
import PartnersRightImage from "../../../assets/images/partner-right.png";
import PartnersLeftImage from "../../../assets/images/partners-left.png";
import PartnerImage1 from "../../../assets/images/client/1.png";
import PartnerImage2 from "../../../assets/images/client/2.png";
import PartnerImage3 from "../../../assets/images/client/3.png";
import PartnerImage4 from "../../../assets/images/client/4.png";
import PartnerImage5 from "../../../assets/images/client/5.png";
import PartnerImage6 from "../../../assets/images/client/6.png";
import PartnerImage7 from "../../../assets/images/client/7.png";
import PartnerImage8 from "../../../assets/images/client/8.png";
import PartnerImage9 from "../../../assets/images/client/9.png";
import PartnerImage10 from "../../../assets/images/client/10.png";
import PartnerImage11 from "../../../assets/images/client/11.png";
import PartnerImage12 from "../../../assets/images/client/12.png";
import PartnerImage13 from "../../../assets/images/client/13.png";

const styles = theme => ({
  PartnersSection: {
    backgroundImage: `url(${PartnersRightImage}), url(${PartnersLeftImage})`,
    backgroundPosition: `right center, left center`,
    backgroundRepeat: `no-repeat, no-repeat`,
    height: '100%',
    paddingTop: `100px`,
    paddingLeft: theme.spacing(25),
    paddingRight: theme.spacing(25),
  },
  partnersText: {
    color: theme.palette.common.black,
    textAlign:`center`,
    fontWeight: 900,
  }
});

function PartnersSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classes.PartnersSection}>
        <Typography variant="h2" className={classes.partnersText}>
          PARTNERS
        </Typography>
        <Grid container>
          <Grid item lg={3} md={3} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage1}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage2}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage3}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage4}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage5}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage6}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage7}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage8}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage9}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage10}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6} style={{textAlign:`center`}}></Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage11}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage12}
            />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6} style={{textAlign:`center`}}>
            <img
              src={PartnerImage13}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6} style={{textAlign:`center`}}></Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

PartnersSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(PartnersSection)
);

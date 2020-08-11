import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  withWidth,
  Link,
  Typography,
  Grid,
} from "@material-ui/core";

const styles = theme => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    }
  },
  
});

function Footer(props) {
  const { classes, theme, width } = props;
  return (
    <footer>
      <div className={classes.footerInner}>
        <Grid container>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                SUPPORT
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                FAQ
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                BLOG
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                TERMS AND CONDITIONS
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                PRIVACY POLICY
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                SYSTEM STATUS
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                MARKETS
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                FEES
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                API
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                COINS INFO
              </Typography>
            </Link>
          </Grid>
          <Grid item lg={1} md={1} sm={2} xs={4}>
            <Link
              to={`/`}
            >
              <Typography variant="p" style={{color:theme.palette.background.default}}>
                WHITEPAPER
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));

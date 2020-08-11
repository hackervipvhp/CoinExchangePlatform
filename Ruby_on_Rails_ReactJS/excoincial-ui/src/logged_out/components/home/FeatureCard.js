import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5
  },
  overflowContent: {
    letterSpacing: `-0.03em`,
    lineHeight: `20px`
  }
});

function FeatureCard(props) {
  const { classes, Icon, content, hasOverflow, theme } = props;
  return (
    <Fragment>
      <div
        // We will set color and fill here, due to some prios complications
        className={classes.iconWrapper}
        style={{
          boxShadow: theme.shadows[6],
          width: `100%`,
          height: `100%`,
          textOverflow: `ellipsis`,
          justifyContent: `left`
        }}
      >
        <img
          src={Icon}
          style={{marginRight:20}}
        />
        <Typography variant="body1" className={hasOverflow?classes.overflowContent:""}>
        {content}
      </Typography>
      </div>      
    </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  hasOverflow: PropTypes.bool.isRequired,
  theme: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(FeatureCard);

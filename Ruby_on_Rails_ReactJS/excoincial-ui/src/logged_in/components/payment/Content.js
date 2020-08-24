import React, {Fragment } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  withWidth,
} from "@material-ui/core";

const styles = theme => ({
    ContentBlank: {
      display: `flex`,
      justifyContent: `left`,
      marginTop: 20,
      marginLeft:10,
      paddingBottom:500,
    },   
});

function Content(props) {
    const { classes } = props;
  
    return (
        <Fragment>            
            <div key={"rewardcenter-blank"} className={classes.ContentBlank} >
                The payment method added will be displayed to buyer as options to accept payment, <br/>
                please ensure that the account owner's name is consistent with your verified name on Binance. <br/>
                You can add up to 20 payment methods.
            </div>
        </Fragment>
    );
}


Content.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    theme: PropTypes.object
  };
  
  export default withWidth()(
    withStyles(styles, { withTheme: true })(Content)
  );
  
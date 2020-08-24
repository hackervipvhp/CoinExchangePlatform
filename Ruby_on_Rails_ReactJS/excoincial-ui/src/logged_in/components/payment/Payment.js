import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import Tabsection from './Tabsection';
import Content from './Content';


function Payment(props) {
    const { selectPayment } = props;
    useEffect(() => {
        selectPayment();
      }, [selectPayment]);
    return (
        <Fragment>
            <Box mt={4}>
                <Typography variant="h3" gutterBottom>
                Payment
                </Typography>
            </Box>
            <Tabsection></Tabsection>
            <Content></Content>
        </Fragment>        
    );
}

Payment.propTypes = {
    selectPayment: PropTypes.func.isRequired
  };

export default Payment;
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import LandingSection from "./Landing";

function Exchange(props) {
  const { selectExchange } = props;
  useEffect(() => {
    selectExchange();
  }, [selectExchange]);
  return (
    <Fragment>
      <LandingSection />
    </Fragment>
  );
}

Exchange.propTypes = {
  selectExchange: PropTypes.func.isRequired
};

export default Exchange;

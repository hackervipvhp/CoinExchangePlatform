import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import LandingSection from "./Landing";

function Markets(props) {
  const { selectMarkets } = props;
  useEffect(() => {
    selectMarkets();
  }, [selectMarkets]);
  return (
    <Fragment>
      <LandingSection />
    </Fragment>
  );
}

Markets.propTypes = {
  selectMarkets: PropTypes.func.isRequired
};

export default Markets;

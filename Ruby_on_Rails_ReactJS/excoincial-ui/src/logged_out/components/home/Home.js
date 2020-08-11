import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import TableSection from "./TableSection";
import SlideSection from "./SlideSection";
import LatestNewsSection from "./LatestNewsSection";
import HowItWorksSection from "./HowItWorksSection";
import PartnersSection from "./PartnersSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <TableSection />
      <SlideSection />
      <LatestNewsSection />
      <FeatureSection />
      <HowItWorksSection />
      <PartnersSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;

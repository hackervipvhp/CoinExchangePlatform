import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import Carousel from 'react-bootstrap/Carousel';
import {
  withStyles,
  withWidth,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper
} from "@material-ui/core";
import slideSectionImage from "../../../assets/images/circle-bg.png";

const styles = theme => ({
  slideSection: {
    background: `url(${slideSectionImage}) center no-repeat`,
    // backgroundSize: `100% 100%`,
    height: '500px',
    paddingTop: `200px`,
  }
});

function createData(name, lastPrice, charge, markets) {
  return { name, lastPrice, charge, markets };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

function slideSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classes.slideSection}>
        
      </div>
    </Fragment>
  );
}

slideSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(slideSection)
);

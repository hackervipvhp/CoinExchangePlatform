import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
import tableSectionImage from "../../../assets/images/table-bg.png";

const styles = theme => ({
  tableSection: {
    background: `url(${tableSectionImage}) center no-repeat`,
    backgroundSize: `100% 100%`,
    height: '800px',
    paddingTop: `200px`,
  },
  table: {
    width: `70vw`,
    marginLeft: `auto`,
    marginRight: `auto`,    
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

function TableSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classes.tableSection}>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="markets">
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell align="right">LAST PRICE</TableCell>
                <TableCell align="right">24H CHARGE</TableCell>
                <TableCell align="right">MARKETS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.lastPrice}</TableCell>
                  <TableCell align="right">{row.charge}</TableCell>
                  <TableCell align="right">{row.markets}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow key={`tablefooter`}>
                <TableCell colSpan={`4`}>
                  View more markets
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
}

TableSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(TableSection)
);

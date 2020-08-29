import React, { Fragment } from "react";
import PropTypes from "prop-types";
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
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
  createData('BTC (Bitcoin)', '$ 9,566.23', '+ 1.88%', 24, 4.0),
  createData('ETH (Ethereum)', '$ 233.50', '+ 8.56%', 37, 4.3),
  createData('XRP (Ripple)', '$ 0.205670', '+ 4.23%', 24, 6.0),
  createData('BNB (BNB)', '$ 17.32', '+ 3.85%', 67, 4.3),
  createData('BNB (BNB)', '$ 17.32', '+ 3.85%', 49, 3.9),
  createData('BNB (BNB)', '$ 17.32', '+ 3.85%', 24, 4.0),
];

function TableSection(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.tableSection}>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="markets">
            <TableHead>
              <TableRow>
                <TableCell align="left">NAME</TableCell>
                <TableCell align="left">LAST PRICE</TableCell>
                <TableCell align="left">24H CHANGE</TableCell>
                <TableCell align="right">MARKETS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.lastPrice}</TableCell>
                  <TableCell align="left" style={{color:`red`}}>{row.charge}</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow key={`tablefooter`}>
                <TableCell colSpan={`4`} align={`center`} style={{color:`red`}}>
                  View more markets
                  <ChevronRightIcon style={{paddingTop:`1vh`}}/>
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

import "./ExpenseTable.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    width: "100%",
    height: "300px",
    marginTop: "10px",
    overflowX: "hidden",
    backgroundColor: "#333",
  },
  table: {
    width: "100%",
  },
});

function ExpenseTable(props) {
  const { classes } = props;

  const expenses = props.expenses.map((row, i) => (
    <TableRow key={i}>
      <TableCell component="th" scope="row">
        {row.title}
      </TableCell>
      <TableCell align="left">{row.cost}</TableCell>
      <TableCell align="left">{row.category}</TableCell>
      <TableCell align="left">{row.date}</TableCell>
    </TableRow>
  ));

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Cost</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">{expenses}</TableBody>
      </Table>
    </Paper>
  );
}
ExpenseTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ExpenseTable);

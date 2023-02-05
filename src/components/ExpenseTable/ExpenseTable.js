import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread1", 356, 16.0, 49, 3.9),
  createData("Gingerbread2", 356, 16.0, 49, 3.9),
  createData("Gingerbread3", 356, 16.0, 49, 3.9),
  createData("Gingerbread4", 356, 16.0, 49, 3.9),
  createData("Gingerbread5", 356, 16.0, 49, 3.9),
  createData("Gingerbread6", 356, 16.0, 49, 3.9),
  createData("Gingerbread7", 356, 16.0, 49, 3.9),
  createData("Gingerbread8", 356, 16.0, 49, 3.9),
  createData("Gingerbread9", 356, 16.0, 49, 3.9),
];

function ExpenseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table
        stickyHeader
        sx={{ minWidth: "100%", height: "100%", overflowY: "auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">title</TableCell>
            <TableCell align="left">cost</TableCell>
            <TableCell align="left">category</TableCell>
            <TableCell align="left">date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.cost}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExpenseTable;

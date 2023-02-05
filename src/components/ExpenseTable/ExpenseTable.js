import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ExpenseTable(props) {
  const cellStyleRow = {
    fontSize: "18px",
    color: "#fff",
  };
  const cellStyleHead = {
    color: "#999",
    backgroundColor: "#222",
    fontSize: 18,
    textTransform: "uppercase",
  };

  const tableRows =
    props.expenses.length > 0 ? (
      props.expenses.map((row, i) => (
        <TableRow
          key={i}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell sx={cellStyleRow} component="th" scope="row">
            {i + 1}
          </TableCell>
          <TableCell sx={cellStyleRow} align="left">
            {"aaaaaaaaaaaaaaaaaaa"}
          </TableCell>
          <TableCell sx={cellStyleRow} align="center">
            {row.cost}
          </TableCell>
          <TableCell sx={cellStyleRow} align="center">
            {row.category}
          </TableCell>
          <TableCell sx={cellStyleRow} align="left">
            {"01/01/2023"}
          </TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": {
            border: 0,
            borderRadius: "15px",
          },
        }}
      >
        <TableCell></TableCell>
        <TableCell sx={cellStyleRow}>{"there are no expenses"}</TableCell>
      </TableRow>
    );

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "15px",
        borderColor: "#000",
      }}
    >
      <TableContainer sx={{ maxHeight: "400px" }} component={Paper}>
        <Table
          stickyHeader
          sx={{
            minWidth: "100%",
            maxHeight: 400,
            overflowX: "auto",
            backgroundColor: "#333",
          }}
          aria-label="expense table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyleHead}>#</TableCell>
              <TableCell align="left" sx={cellStyleHead}>
                title
              </TableCell>
              <TableCell sx={cellStyleHead} align="left">
                cost
              </TableCell>
              <TableCell sx={cellStyleHead} align="left">
                category
              </TableCell>
              <TableCell sx={cellStyleHead} align="left">
                date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ExpenseTable;

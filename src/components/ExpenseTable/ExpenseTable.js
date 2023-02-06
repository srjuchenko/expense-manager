import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRows from "./TableRows";
import "./ExpenseTable.css";

function ExpenseTable(props) {
  const cellStyleHead = {
    color: "#999",
    backgroundColor: "#222",
    fontSize: 18,
    textTransform: "uppercase",
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "15px",
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
              <TableCell sx={cellStyleHead} align="center">
                cost
              </TableCell>
              <TableCell sx={cellStyleHead} align="center">
                category
              </TableCell>
              <TableCell sx={cellStyleHead} align="left">
                date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRows expenses={props.expenses} />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ExpenseTable;

/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRows from "./TableRows";
import { cellStyleHead } from "../../utils/inlinestyles";
import "./ExpenseTable.css";

/**
 *
 * @param {list} props
 * @returns component with table that shows expenses data
 */
function ExpenseTable(props) {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "15px",
      }}
    >
      <TableContainer sx={{ maxHeight: "350px" }} component={Paper}>
        <Table
          stickyHeader
          sx={{
            minWidth: "100%",
            maxHeight: 350,
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

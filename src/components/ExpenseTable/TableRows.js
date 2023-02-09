/*
  Moshe Frankipour 206196693
  Sergey Juchenko 319365102
*/
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { cellStyleRow } from "../../utils/inlinestyles";

function tableRows(props) {
  if (props.expenses.length === 0) {
    return (
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
  } else {
    return props.expenses.map((row, i) => (
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell sx={cellStyleRow} component="th" scope="row">
          {i + 1}
        </TableCell>
        <TableCell sx={cellStyleRow} align="left">
          {row.title}
        </TableCell>
        <TableCell sx={cellStyleRow} align="center">
          {row.cost} $
        </TableCell>
        <TableCell sx={cellStyleRow} align="center">
          {row.category}
        </TableCell>
        <TableCell sx={cellStyleRow} align="left">
          {new Date(row.date).toLocaleDateString("he-IL")}
        </TableCell>
      </TableRow>
    ));
  }
}

export default tableRows;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Status, Details, Tables } from "./TableElement";

function createData(name, amount, date, status) {
  return { name, amount, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 500, "2 March 2022", "Paid"),
  createData("Big Baza Bang ", 400, "2 March 2022", "Unpaid"),
  createData("Mouth Freshner", 600, "2 March 2022", "Paid"),
  createData("Cupcake", 300, "2 March 2022", "Paid"),
];

const makeStyle = (status) => {
  if (status === "Paid") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Unpaid") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <Tables>
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <Status style={makeStyle(row.status)}>{row.status}</Status>
                </TableCell>
                <TableCell>
                  <Details align="left">Details</Details>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Tables>
  );
}

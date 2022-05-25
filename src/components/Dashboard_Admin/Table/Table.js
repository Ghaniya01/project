import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Status, Details, Tables } from "./TableElement";

function createData(name, Id, date, status) {
  return { name, Id, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Student"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Vendor"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Student"),
  createData("Cupcake", 18908421, "2 March 2022", "Vendor"),
];

const makeStyle = (status) => {
  if (status === "Student") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Vendor") {
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
      <h3>Recent Users</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">ID</TableCell>
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
                <TableCell align="left">{row.Id}</TableCell>
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

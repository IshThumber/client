import React, { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import data from "../StudentManagement/mock-data.json";

export default function CastDataTable() {
  {
    /*START TABLE*/
  }

  const columns = [
    {
      id: "SR",
      align: "center",
      label: "SR",
      minWidth: 50,
    },
    {
      id: "Name",
      align: "center",
      label: "Name",
      minWidth: 100,
    },
    {
      id: "UNumber",
      label: "UNumber",
      minWidth: 150,
      align: "center",
    },
    {
      id: "GRNumber",
      label: "GRNumber",
      minWidth: 20,
      align: "center",
    },
  ];
  const [rows, setRow] = useState(data);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  {
    /*FINISH TABLE*/
  }
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      {/*Start of Drop-down Menu */}
      <Box sx={{ minWidth: 50, maxWidth: 100, m: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* End Of Drop-down Menu */}

      <Paper
        style={{ borderRadius: "25px" }}
        sx={{ width: "100%", overflow: "hidden" }}
      >
        <TableContainer sx={{ height: "max-content" }}>
          <Table stickyHeader aria-label="sticky table">
            {/* ......................header row of Table......................  */}
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      color: "white",
                      backgroundColor: "#106375",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ......................table pagination ........................... */}
        <TablePagination
          rowsPerPageOptions={[5, 10, { value: -1, label: "All" }]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

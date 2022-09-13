import * as React from "react";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import data from "./mock-data.json";

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

export default function StudentTable() {
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

  return (
    <>
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

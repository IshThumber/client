import * as React from "react";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "SR", align: "center", label: "SR", minWidth: 50 },
  { id: "Name", align: "center", label: "Name", minWidth: 100 },
  {
    id: "UNumber",
    label: "UNumber",
    minWidth: 150,
    align: "center",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "GRNumber",
    label: "GRNumber",
    minWidth: 20,
    align: "center",
    // format: (value) => value.toLocaleString("en-US"),
  },
  //   {
  //     id: "U-dise-number",
  //     label: "U-dise-number",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toFixed(2),
  //   },
];

function createData(SR, Name, UNumber, GRNumber) {
  return { SR, Name, UNumber, GRNumber };
}

const rows = [
  createData(1, "Pratik Suthar", 242406042050000000, 1231),
  createData(2, "Pratik Suthar", 242406042050000000, 1231),
  createData(3, "Pratik Suthar", 242406042050000000, 1231),
  createData(4, "Pratik Suthar", 242406042050000000, 1231),
  createData(5, "Pratik Suthar", 242406042050000000, 1231),
  createData(6, "Pratik Suthar", 242406042050000000, 1231),
  createData(7, "Pratik Suthar", 242406042050000000, 1231),
  createData(8, "Pratik Suthar", 242406042050000000, 1231),
  createData(9, "Pratik Suthar", 242406042050000000, 1231),
  createData(10, "Pratik Suthar", 242406042050000000, 1231),
  createData(11, "Pratik Suthar", 242406042050000000, 1231),
];

export default function StudentTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper 
    style={{ borderRadius: '25px'}}
    sx={{ width: "90%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,
                    color: "white" ,backgroundColor: "#106375"}}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                        
                        key={column.id} align={column.align}>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

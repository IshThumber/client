import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import StatusData from "./subjectStatus.json";

//represent columns of table
const columns1 = [
  {
    field: "standard",
    headerName: "standard",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "gujarati",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Gujarati",
    flex: 1,
    width: 190,
  },
  {
    field: "maths",
    headerName: "maths",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "hindi",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "hindi",
    flex: 1,
    width: 190,
  },
];
const columns2 = [
  {
    field: "standard",
    headerName: "standard",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "gujarati",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Gujarati",
    flex: 1,
    width: 190,
  },
  {
    field: "maths",
    headerName: "maths",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "hindi",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "hindi",
    flex: 1,
    width: 190,
  },
];
export default function DashboardStatusTable() {
  const [row1, setRows1] = useState(StatusData); //useState for store rows of table
  const [row2, setRows2] = useState(StatusData); //useState for store rows of table
  useEffect(() => {
    let ob1 = StatusData.filter((d) => d.standard <= 5);
    let ob2 = StatusData.filter((d) => d.standard > 5);
    setRows1(ob1);
    setRows2(ob2);
  },[]);

  console.log("hello");
  return (
    <div>
      <Box
        sx={{
          height: 400,
          width: "80%",
          border: "1px solid black",
          "& .super-app-theme--header": {
            color: "#ffffff",
            backgroundColor: "#346f82",
          },
        }}
      >
        <DataGrid
          cell--textCenter
          rows={row1}
          columns={columns1}
          // pageSize={5}
          // rowsPerPageOptions={[5]} //table pagination
          components={{ Toolbar: GridToolbar }} //header above the table
          disableColumnFilter //remove filter button
          disableColumnSelector //to remove column selection
          disableDensitySelector //to remove density selection
          disableColumnMen
          
        />
      </Box>

      <Box
        sx={{
          height: 400,
          width: "80%",
          border: "1px solid black",
          "& .super-app-theme--header": {
            color: "#ffffff",
            backgroundColor: "#346f82",
          },
        }}
      >
        <DataGrid
          cell--textCenter
          rows={row2}
          columns={columns2}
          pageSize={8}
          // rowsPerPageOptions={[5]} //table pagination
          components={{ Toolbar: GridToolbar }} //header above the table
          disableColumnFilter //remove filter button
          disableColumnSelector //to remove column selection
          disableDensitySelector //to remove density selection
          disableColumnMen
        />
      </Box>
    </div>
  );
}

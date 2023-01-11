import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import "./Dashboard.css";
// import StatusData from "./subjectStatus.json";

//represent columns of table
const columns1 = [
  {
    field: "standard",
    headerName: "Standard",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "Gujarati",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Gujarati",
    flex: 1,
    width: 190,
  },
  {
    field: "English",
    headerName: "English",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "Hindi",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Hindi",
    flex: 1,
    width: 190,
  },
  {
    field: "Maths",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Maths",
    flex: 1,
    width: 190,
  },
  {
    field: "Environmental Study",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Environmental Study",
    flex: 1,
    width: 190,
  },
];
const columns2 = [
  {
    field: "standard",
    headerName: "Standard",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "Gujarati",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Gujarati",
    flex: 1,
    width: 190,
  },
  {
    field: "Maths",
    headerName: "Maths",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "Hindi",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Hindi",
    flex: 1,
    width: 190,
  },
  {
    field: "English",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "English",
    flex: 1,
    width: 190,
  },
  {
    field: "Science",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Science",
    flex: 1,
    width: 190,
  },
  {
    field: "Social Science",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Social Science",
    flex: 1,
    width: 190,
  },
  {
    field: "Sanskrit",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Sanskrit",
    flex: 1,
    width: 190,
  },
];
export default function DashboardStatusTable() {
  const [row1, setRows1] = useState([]); //useState for store rows of table
  const [row2, setRows2] = useState([]); //useState for store rows of table
  const [isRowFetched, setIsRowFetched] = useState(true);
  // async function statusData() {

  // let year = 2023;
  // let sem = semester.toString();
  // let status = await fetch(
  //   `http://localhost:5050/dashboard/${sessionStorage.getItem("schoolId")}/${year}/${sem}`,
  // )
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // console.log(status);
  // console.log("status");
  // }

  const [semester, setSemester] = useState(1);

  function handleSemesterChange() {
    var a = document.getElementById("semester");
    setSemester(parseInt(a.value));
  }
  useEffect(() => {
    // let ob1 = StatusData.filter((d) => d.standard <= 5);
    // let ob2 = StatusData.filter((d) => d.standard > 5);
    // setRows1(ob1);
    // setRows2(ob2);
    // console.log("Hiiiiii");
    setIsRowFetched(false);
    async function statusData() {
      let year = 2023;
      let sem = semester.toString();
      const status = await fetch(
        `http://localhost:5050/dashboard/${sessionStorage.getItem(
          "schoolId"
        )}/${year}/${sem}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(status);

      if (status) {
        let ob1 = status.filter(
          (d) => parseInt(d.standard.substring(4, 5)) <= 5
        );
        let ob2 = status.filter(
          (d) => parseInt(d.standard.substring(4, 5)) > 5
        );
        setRows1(ob1);
        setRows2(ob2);
        setIsRowFetched(true);
      }
    }
    statusData();
  }, [semester]);
  // statusData();
  return (
    <>
      <div className="drop-down-standard">
        <label>Semester : </label>

        <select
          style={{ padding: "8px", marginBottom: "10px" }}
          onChange={handleSemesterChange}
          name="semester"
          id="semester"
        >
          <option style={{ padding: "8px" }} value="1">
            1
          </option>
          <option style={{ padding: "8px" }} value="2">
            2
          </option>
        </select>
      </div>
      <div>
        {isRowFetched ? (
          <>
            <Box
              sx={{
                height: 300,
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
                pageSize={5}
                // rowsPerPageOptions={[5]} //table pagination
                components={{ Toolbar: GridToolbar }} //header above the table
                disableColumnFilter //remove filter button
                disableColumnSelector //to remove column selection
                disableDensitySelector //to remove density selection
                disableColumnMen
                disablrPagination
                disableSelectionOnClick
                disableVirtualization
                disableExtendRowFullWidth
              />
            </Box>

            <Box
              sx={{
                marginTop: 2,
                height: 300,
                width: "80%",
                marginBottom: "50px",
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
          </>
        ) : (
          <div className="admin-loader-class" style={{ marginTop: "-50px" }}>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

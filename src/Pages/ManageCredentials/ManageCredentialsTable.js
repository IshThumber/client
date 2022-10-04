import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TeacherData from "./TeacherData.json";

//here id is the key value of id which is shown in the json
//handler for the edit in class details
const handleEditClick = (id) => () => {
  var da = TeacherData.find((std) => std.id === id);
  alert(`Edit ${da.standard}`);
  //logic here.............//
};

//handler for the delete in class details
const handleDeleteClick = (id) => () => {
  var da = TeacherData.find((std) => std.id === id);
  alert(`Delete ${da.standard}`);
  //logic here.............//
};

//represent columns of table
const columns = [
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
    field: "userName",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Username",
    flex: 1,
    width: 190,
  },
  {
    field: "password",
    headerName: "password",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "teacherName",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "teacherName",
    flex: 1,
    width: 190,
  },
  {
    field: "actions",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    getActions: ({ id }) => {
      // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

      return [
        <GridActionsCellItem
          icon={<FaEdit />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<MdDelete />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  },
];

//main function start from here...

export default function ManageCredentialTable(props) {
  const [row, setRows] = useState(TeacherData); //useState for store rows of table

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
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]} //table pagination
          components={{ Toolbar: GridToolbar }} //header above the table
          disableColumnFilter //remove filter button
          disableColumnSelector //to remove column selection
          disableDensitySelector //to remove density selection
          disableColumnMenu
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }} //search button
        />
      </Box>
    </div>
  );
}

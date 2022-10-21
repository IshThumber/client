import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import StandardEntry from "./StandardEntry.js/StandardEntry";
import Loader from "../../components/Loader";

//here id is the key value of id which is shown in the json
//handler for the edit in class details
let CredentialsData;
const handleEditClick = (id) => () => {
    var da = CredentialsData.find((std) => std.id === id);
    alert(`Edit ${da.standard}`);

    let singleStandardData;
    CredentialsData.forEach((index) => {
        if (index.id == id) {
            singleStandardData = index;
        }
    });
    console.log(singleStandardData);
};

//handler for the delete in class details
const handleDeleteClick = (id) => async () => {
    var da = CredentialsData.find((std) => std.id === id);
    alert(`delete ${da.standard}`);
    //logic here.............//

    try {
        const isDeleted = await fetch(
            `http://localhost:5050/deleteTeachers/${sessionStorage.getItem(
                "schoolId"
            )}/${id}`,
            {
                method: "PUT",
            }
        );

        const res = await isDeleted.json();
        if (res.message) {
            window.alert("Teacher Deleted Successfully");
            window.location.reload();
            // getTeacherData();
        } else {
            window.alert("Teacher Not Deleted");
        }
    } catch (err) {
        console.error(err);
    }
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
        field: "teacherId",
        align: "center",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        headerName: "Username",
        flex: 1,
        width: 190,
    },
    {
        field: "contactNo",
        headerName: "Mobile Number",
        width: 90,
        flex: 1,
        align: "center",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
    },
    {
        field: "name",
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
    const [row, setRows] = useState([]); //useState for store rows of table
    const [teacher, setTeacher] = useState(0);
    const [isRowFetched, setIsRowFetched] = useState(true);

    useEffect(() => {
        setIsRowFetched(false);
        async function getTeacherData() {
            const teachers = await fetch(
                `http://localhost:5050/showTeachers/${sessionStorage.getItem(
                    "schoolId"
                )}`
            )
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .catch((err) => console.error(err));
            if (!teachers.message) {
                setRows(JSON.parse(teachers));
                setIsRowFetched(true);
                CredentialsData = JSON.parse(teachers); //pratik
            } else {
                setRows([]);
                setIsRowFetched(true);
            }
        }
        getTeacherData();
    }, [teacher]);

    return (
        <div>
            <StandardEntry />
            {isRowFetched ? (
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
            ) : (
                <div
                    className="admin-loader-class"
                    style={{ marginTop: "-70px" }}
                >
                    <Loader />
                </div>
            )}
        </div>
    );
}

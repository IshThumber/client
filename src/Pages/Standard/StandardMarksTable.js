import * as React from "react";
import Box from "@mui/material/Box";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import {
    DataGrid,
    GridActionsCellItem,
    GridRowModes,
    GridToolbar,
    GridToolbarContainer,
} from "@mui/x-data-grid";

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = 2;
//     setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<HiUserAdd />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// EditToolbar.propTypes = {
//   setRowModesModel: PropTypes.func.isRequired,
//   setRows: PropTypes.func.isRequired,
// };

export default function StandardMarksTable(props) {
    const [rows, setRows] = React.useState([]);
    const [rowModesModel, setRowModesModel] = React.useState({});

    React.useEffect(() => {
        console.log("Hi");
        setRows(props.standardWiseData);
    });

    const handleDownloadClick = (id) => () => {
        alert(id);
    };

    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.Edit },
        });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
        });
    };

    // const handleDeleteClick = (id) => () => {
    //     setRows(rows.filter((row) => row.id !== id));
    // };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const columns = [
        {
            field: "studentId",
            headerName: "Student Id",
            width: 120,
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
        },
        {
            field: "name",
            headerName: "Student Name",
            width: 120,
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
        },
        {
            field: "formativeAssessment",
            headerName: "Formative Assessment",
            width: 200,
            type: "number",
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            editable: true,
        },
        {
            field: "semesterAssessment",
            headerName: "Semester Assessment",
            width: 200,
            type: "number",
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            editable: true,
        },
        {
            field: "selfAssessment",
            headerName: "Self Assessment",
            width: 200,
            type: "number",
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            editable: true,
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            width: 140,
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            cellClassName: "actions",
            getActions: ({ id }) => {
                const isInEditMode =
                    rowModesModel[id]?.mode === GridRowModes.Edit;
                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={
                                <FaSave
                                    style={{ fontSize: 20, color: "black" }}
                                />
                            }
                            label="Save"
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<MdCancel style={{ fontSize: 20 }} />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<FaEdit style={{ fontSize: 15 }} />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    // <GridActionsCellItem
                    //     icon={<MdDelete style={{ fontSize: 15 }} />}
                    //     label="Delete"
                    //     onClick={handleDeleteClick(id)}
                    //     color="inherit"
                    // />,
                ];
            },
        },
        {
            field: "Download",
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            type: "actions",
            headerName: "Download",
            width: 100,
            size: "100%",
            cellClassName: "actions",
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<MdDownloadForOffline style={{ fontSize: 20 }} />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleDownloadClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <>
            <Box
                sx={{
                    height: 400,
                    width: "80%",
                    "& .actions": {
                        color: "red",
                    },
                    "& .textPrimary": {
                        color: "black",
                    },
                    "& .super-app-theme--header": {
                        color: "#ffffff",
                        backgroundColor: "#346f82",
                    },
                }}
            >
                <DataGrid
                    pageSize={5}
                    rowsPerPageOptions={[5]} //table pagination
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={(newModel) =>
                        setRowModesModel(newModel)
                    }
                    onRowEditStart={handleRowEditStart}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    componentsProps={{
                        toolbar: { setRows, setRowModesModel },
                    }}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </>
    );
}

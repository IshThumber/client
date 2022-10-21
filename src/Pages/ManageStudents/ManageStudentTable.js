import React, { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import StudentEntry from "./StudentEntry/StudentEntry";
import StandardsList from "./StandardsList";
import Loader from "../../components/Loader";

//main function start from here...

export default function ManageStudentTable(props) {
    let standardWiseData;
    const [isRowFetched, setIsRowFetched] = useState(true);

    async function studentsData() {
        setIsRowFetched(false);

        let year = 2022;
        let std = standard.toString();
        let ob = await fetch(
            `http://localhost:5050/showStudents/${sessionStorage.getItem(
                "schoolId"
            )}/${year}/STD ${std}`
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .catch((err) => console.error(err));
        if (!ob.message) {
            standardWiseData = JSON.parse(ob);
            for (let i = 0; i < standardWiseData.length - 1; i++) {
                for (let j = 0; j < standardWiseData.length - i - 1; j++) {
                    if (
                        standardWiseData[j].studentId >
                        standardWiseData[j + 1].studentId
                    ) {
                        let temp = standardWiseData[j];
                        standardWiseData[j] = standardWiseData[j + 1];
                        standardWiseData[j + 1] = temp;
                    }
                }
            }
            setRows(standardWiseData);
            setIsRowFetched(true);
        } else {
            setRows([]);
            setIsRowFetched(true);
        }
    }

    //here id is the key value of id which is shown in the json
    //handler for the edit in student details
    const handleEditClick = (id) => () => {
        alert(`Edit ${id}`);
        let singleStudentData;
        standardWiseData.forEach((index) => {
            if (index.id == id) {
                singleStudentData = index;
            }
        });
        console.log(singleStudentData);
        //logic here.............//
    };

    //handler for the delete in student details
    const handleDeleteClick = (id) => async () => {
        alert(`Delete ${id}`);
        //logic here.............//
        try {
            const isDeleted = await fetch(
                `http://localhost:5050/deleteStudents/${id}`,
                {
                    method: "PUT",
                }
            );

            const res = await isDeleted.json();
            if (res.isDeleted) {
                window.alert("Successfully deleted");
                studentsData();
            } else {
                window.alert("Some error occured!!!");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    //represent columns of table
    const columns = [
        {
            field: "studentId",
            headerName: "Sr",
            width: 70,
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
        },
        {
            field: "UdiseNo",
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            headerName: "UID Number",
            flex: 1,
            width: 190,
        },
        {
            field: "grNo",
            headerName: "G R Number",
            width: 90,
            flex: 1,
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
        },
        {
            flex: 1,
            field: "fullName",
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            headerName: "Full name",
            cellAlign: "center",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.surname || ""} ${params.row.studentName || ""} ${
                    params.row.fatherName || ""
                } `,
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
            field: "actions",
            align: "center",
            headerClassName: "super-app-theme--header",
            headerAlign: "center",
            type: "actions",
            headerName: "Actions",
            width: 80,
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

    const [row, setRows] = useState([]); //useState for store rows of table
    const [standard, setStandard] = useState(0); //useState for set standard which is selected by user
    const [standardsList, setStandardList] = useState([]); // useSate for set standardList which comes from backend

    // Handler calls method for fetching list from backend
    async function handleStandardList() {
        setStandardList(await StandardsList());
    }

    //event handler for standard drop down
    function handleStandard() {
        var a = document.getElementById("standard");
        setStandard(a.value);
    }

    //method call when any changes occurred in value of standard
    //Do not change == to === without permission📌📌📌
    useEffect(() => {
        try {
            if (standard != 0) {
                studentsData();
            } else {
                setRows([]);
            }
        } catch (err) {
            console.error(err.message);
        }
    }, [standard]);

    return (
        <div>
            <div className="drop-down-standard">
                <label>Standard : </label>

                <select
                    style={{ padding: "8px" }}
                    onClick={handleStandardList}
                    onChange={handleStandard}
                    name="standard"
                    id="standard"
                >
                    <option style={{ padding: "8px" }} value="None">
                        None
                    </option>

                    {standardsList.map((v) => (
                        <option key={v.key} value={v.listValue}>
                            {v.listValue}
                        </option>
                    ))}
                </select>

                {isRowFetched ? (
                    <div
                        style={{
                            width: "250px",
                            marginTop: "20px",
                            textAlign: "center",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            display: "block",
                            padding: "1rem 3rem",
                            borderRadius: "10px",
                            lineHeight: "30px",
                            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
                            transition: "all 0.15s",
                        }}
                    >
                        <div>Total Students </div>
                        <div style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                            {" "}
                            {row.length}
                        </div>
                    </div>
                ) : null}
            </div>
            <div>
                <div style={{ textAlign: "end", marginRight: "250px" }}>
                    <StudentEntry studentData={studentsData} />
                </div>

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
                        style={{
                            marginTop: "-150px",
                        }}
                    >
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}

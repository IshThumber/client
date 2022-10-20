import React, { useEffect, useState } from "react";
import "./standard.css";
import StandardMarksTable from "./StandardMarksTable";
import Result from "./Result/Result";
import ResultFront from "./Result/ResultFront";
import HeaderStandard from "./components/HeaderStandard";
import Box from "@mui/material/Box";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
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
const examList = [
  { key: 1, value: "exam 1", display: "exam1" },
  { key: 2, value: "exam 2", display: "exam2" },
];

const subjectList = [
  {
    key: 1,
    value: "Gujarati",
    display: "Gujarati",
  },
  {
    key: 2,
    value: "English",
    display: "English",
  },
];

function Standard(props) {
  let standardWiseData;

  //hook for handle exam...
  const [exam, setExam] = useState("0");
  const [subject, setSubject] = useState("0");

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (subject != 0 && exam != 0) {
      async function studentsData() {
        console.log("In");
        let year = 2022;
        let std = props.standard;
        let ob = await fetch(
          `http://localhost:5050/getStandardData/${sessionStorage.getItem(
            "schoolId"
          )}/${year}/${std}/${exam.substring(5, 6)}/${subject}`
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .catch((err) => console.error(err));
        if (!ob.message) {
          console.log(ob);
          standardWiseData = ob;
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
        } else {
          window.alert(ob.message);
          standardWiseData = [];
          setRows(standardWiseData);
        }
      }
      studentsData();
    }
  }, [exam, subject]);

  //handler for exam
  function handleexam() {
    var a = document.getElementById("exam");
    setExam(a.value);
  }

  function handlesubject() {
    var s = document.getElementById("subject");
    setSubject(s.value);
  }

  const [standard] = useState(props.standard);

  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleDownloadClick = (id) => () => {
    alert(id);
    setIsShown((current) => !current);
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

  const handleSaveClick = (id) => async () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  //   const handleDeleteClick = (id) => () => {
  //     setRows(rows.filter((row) => row.id !== id));
  //   };

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

  const processRowUpdate = async (newRow) => {
    try {
      const isSaved = await fetch(
        `http://localhost:5050/saveMarks/${newRow.id}/${newRow.formativeAssessment}/${newRow.semesterAssessment}/${newRow.selfAssessment}`,
        {
          method: "PUT",
        }
      );

      const res = await isSaved.json();
      if (res.isSaved) {
        console.log("Marks Saved");
      } else {
        window.alert(res.message);
      }
    } catch (err) {
      console.error(err.message);
    }
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
      field: "fullName",
      headerName: "Student Name",
      width: 250,
      align: "center",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      valueGetter: (params) =>
        `${params.row.surname || ""} ${params.row.studentName || ""} ${
          params.row.fatherName || ""
        } `,
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
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<FaSave style={{ fontSize: 20, color: "black" }} />}
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
          //   <GridActionsCellItem
          //     icon={<MdDelete style={{ fontSize: 15 }} />}
          //     label="Delete"
          //     onClick={handleDeleteClick(id)}
          //     color="inherit"
          //   />,
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
      <HeaderStandard {...props} />

      {/* ...........main-container........... */}

      <div className="standard-content-container">
        {/* .......drop down for exam selection........*/}
        <div style={{ margin: 5 }} className="drop-down-exam-standard">
          <label>Choose a exam : </label>

          <select
            style={{ padding: 10 }}
            onChange={handleexam}
            name="exam"
            id="exam"
          >
            <option value="None">None</option>

            {examList.map((v) => (
              <option key={v.key} value={v.value}>
                {v.display}
              </option>
            ))}
          </select>
        </div>

        {/* .......drop down for subject selection........*/}

        <div style={{ margin: 5 }} className="drop-down-subject-standard">
          <label>Choose a subject : </label>

          <select
            style={{ padding: 10 }}
            onChange={handlesubject}
            name="subject"
            id="subject"
          >
            <option value="None">None</option>

            {subjectList.map((v) => (
              <option key={v.key} value={v.value}>
                {v.display}
              </option>
            ))}
          </select>
        </div>
        <>
          <Box
            sx={{
              height: 400,
              width: "90%",
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
              onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
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
      </div>

      {/* result module  */}

      {/* <ResultFront /> */}

      {/* <Result /> */}

      {isShown && (
        <div>
          <ResultFront />
          <Result />
        </div>
      )}
    </>
  );
}
export default Standard;

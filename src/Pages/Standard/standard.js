import React, { useEffect, useState } from "react";
import "./standard.css";
import ResultFront from "./Result/ResultFront";
import HeaderStandard from "./components/HeaderStandard";
import Loader from "../../components/Loader";
import Box from "@mui/material/Box";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { DataGrid, GridActionsCellItem, GridRowModes } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// success dialog
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  {
    key: 3,
    value: "Maths",
    display: "Maths",
  },
  {
    key: 4,
    value: "Hindi",
    display: "Hindi",
  },
  {
    key: 5,
    value: "Environmental Study",
    display: "Environmental Study",
  },
];

const subjectList2 = [
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
  {
    key: 3,
    value: "Maths",
    display: "Maths",
  },
  {
    key: 4,
    value: "Hindi",
    display: "Hindi",
  },
  {
    key: 5,
    value: "Social Science",
    display: "Social Science",
  },

  {
    key: 6,
    value: "Science",
    display: "Science",
  },
  {
    key: 7,
    value: "Sanskrit",
    display: "Sanskrit",
  },
];

function Standard(props) {
  let standardWiseData;

  let anchorOrigin = { vertical: "top", horizontal: "center" };

  const [statusAlert, setStatusAlert] = useState(false);

  const handleCloseStatusAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setStatusAlert(false);
  };

  //hook for handle exam...
  const [exam, setExam] = useState("0");
  const [subject, setSubject] = useState("0");
  const [isRowsFetched, setIsRowsFetched] = useState(true);
  const [isShown, setIsShown] = useState(0);

  useEffect(() => {
    if (subject != 0 && exam != 0) {
      setIsShown(0);
      setIsRowsFetched(false);
      async function studentsData() {
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
          setIsRowsFetched(true);
        } else {
          window.alert(ob.message);
          standardWiseData = [];
          setRows(standardWiseData);
          setIsRowsFetched(true);
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

  const [resultData, setResultData] = useState({});

  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const [prevId, setPrevId] = useState(null);
  const handleDownloadClick = (id) => async () => {
    if (prevId == id && isShown != 0) {
      setIsShown(0);
    } else {
      setIsShown(1);
      const data = await fetch(
        `http://localhost:5050/getStudentWholeData/${sessionStorage.getItem(
          "schoolId"
        )}/${id}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .catch((err) => {
          console.log(err);
        });
      if (!data.message) {
        setResultData(JSON.parse(data));
        setIsShown(2);
      } else {
        window.alert(data.message);
        setResultData({});
        setIsShown(0);
      }
      setPrevId(id);
    }
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
        setStatusAlert(true);
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

            {parseInt(props.standard.substring(4, 5)) > 5
              ? subjectList2.map((v) => (
                  <option key={v.key} value={v.value}>
                    {v.display}
                  </option>
                ))
              : subjectList.map((v) => (
                  <option key={v.key} value={v.value}>
                    {v.display}
                  </option>
                ))}
          </select>
        </div>
        <div className="standard-table">
          {isRowsFetched ? (
            <>
              <Box
                sx={{
                  height: 400,
                  width: "78.85%",
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
                  experimentalFeatures={{
                    newEditingApi: true,
                  }}
                />
              </Box>
            </>
          ) : (
            <div className="standard-loader-class">
              <Loader />
            </div>
          )}
        </div>
      </div>
      {/* Success Alert............... */}
      <Snackbar
        open={statusAlert}
        anchorOrigin={anchorOrigin}
        autoHideDuration={6000}
        onClose={handleCloseStatusAlert}
      >
        <Alert
          onClose={handleCloseStatusAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Marks saved Successfully
        </Alert>
      </Snackbar>
      ;{/* result module  */}
      {/* <ResultFront /> */}
      {/* <Result /> */}
      {isShown === 2 ? (
        <div>
          <ResultFront resultData={resultData} />
        </div>
      ) : isShown === 1 ? (
        <div className="standard-loader-class">
          <Loader />
        </div>
      ) : null}
    </>
  );
}
export default Standard;

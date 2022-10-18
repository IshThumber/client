import React, { useEffect, useState } from "react";
import "./standard.css";
import { toast } from "react-toastify";
import StandardMarksTable from "./StandardMarksTable";
import { logOut } from "./components/logOut";
const examList = [
  { key: 1, value: "exam 1", display: "exam1" },
  { key: 2, value: "exam 2", display: "exam2" },
];

const subjectList = [
  {
    key: 1,
    value: "science",
    display: "science",
  },
  {
    key: 2,
    value: "maths",
    display: "maths",
  },
];

function Standard(props) {
  //hook for handle exam...
  const [exam, setExam] = useState("0");
  const [subject, setSubject] = useState("0");

  //handler for exam
  function handleexam() {
    var a = document.getElementById("exam");
    setExam(a.value);
  }

  function handlesubject() {
    var s = document.getElementById("subject");
    setSubject(s.value);
  }

  const styleToast = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
  };

  const [standard] = useState(props.standard);

  const onLogOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    props.setAuth(false);
    props.setAdmin(false);
    toast.success("Logout Successful!", styleToast);
  };

  return (
    <>
      {/* ..........header-part......... */}
      <div className="standard-header">
        <button className="standard-logout-button" onClick={onLogOut}>
          <b>LOG OUT</b>
        </button>
      </div>

      {/* ...........main-container........... */}

      <div className="standard-content-container">
        <div>Class : {standard}</div>
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
        <StandardMarksTable />
      </div>
    </>
  );
}
export default Standard;

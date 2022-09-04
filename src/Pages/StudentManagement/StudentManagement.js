import { Button } from "@mui/material";
import React from "react";
import "./StudentManagement.css";

import AddNewStudentForm from "./AddNewStudentForm";
import StudentTable from "./StudentTable";

const StudentManagement = () => {
  return (
    <>
      {/* <div className="box-container">
        <div className="button-row">
          <div className="Excel-sheet-button">
            <Button className="pro-button">Excel</Button>
          </div>
          <div className="Add-Student">
            <Button className="pro-button">Add Student</Button>
          </div>
        </div>
        <StudentTable />
      </div> */}


      <AddNewStudentForm></AddNewStudentForm>
    </>
  );
};
export default StudentManagement;

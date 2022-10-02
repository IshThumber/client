import React, { useState } from "react";
import "./ManageStudents.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ManageStudentTable from "./ManageStudentTable";

const ManageStudents = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="Content-container">
          <ManageStudentTable />
        </div>
      </div>
    </>
  );
};
export default ManageStudents;

import React from "react";
import "./ManageStudents.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ManageStudentTable from "./ManageStudentTable";
import StudentEntry from "./StudentEntry/StudentEntry";

const ManageStudents = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="Header"></div>
        <div className="Content-container">
          <ManageStudentTable />
        </div>
      </div>
    </>
  );
};
export default ManageStudents;

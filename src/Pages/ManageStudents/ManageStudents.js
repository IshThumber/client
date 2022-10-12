import React from "react";
import "./ManageStudents.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ManageStudentTable from "./ManageStudentTable";
import Header from "../../components/Header/Header";

const ManageStudents = (props) => {
  return (
    <>
      <div>
        <Sidebar {...props}></Sidebar>
        <Header {...props} HeaderText="Manage Student" />
        <div className="Content-container">
          <ManageStudentTable />
        </div>
      </div>
    </>
  );
};
export default ManageStudents;

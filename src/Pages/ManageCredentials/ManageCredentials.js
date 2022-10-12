import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ManageCredentialsTable from "./ManageCredentialsTable";
const ManageCredentials = (props) => {
  return (
    <>
      <div>
        <Sidebar {...props}></Sidebar>
        <Header {...props} HeaderText="Manage Credentials" />
        <div className="Content-container">
          <ManageCredentialsTable />
        </div>
      </div>
    </>
  );
};

export default ManageCredentials;

import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ManageCredentialsTable from "./ManageCredentialsTable";
const ManageCredentials = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="Content-container">
          <ManageCredentialsTable />
        </div>
      </div>
    </>
  );
};

export default ManageCredentials;

import React from "react";
import "../../App.css";
<<<<<<< Updated upstream
import Sidebar from "../../components/Sidebar.js";
const CredentialsManagement = () => {
    return (
        <>
            <div className="Flex">
                <Sidebar />
                <div className="Content-container">
                    <div className="container">CredentialsManagement</div>
                </div>
            </div>
        </>
    );
=======
import CredentialsTable from "./CredentialsTable.js";
function CredentialsManagement(){
  return (
    <>
      <CredentialsTable></CredentialsTable>
    </>
  );
>>>>>>> Stashed changes
};
export default CredentialsManagement;

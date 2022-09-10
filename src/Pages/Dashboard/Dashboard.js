import React from "react";
import "../../App.css";
import AddNewStudentForm from "../StudentManagement/AddNewStudentForm";
import Sidebar from "../../components/Sidebar.js";
function Dashboard() {
<<<<<<< Updated upstream
    return (
        <>
            <div className="Flex">
                <Sidebar />
                <div className="Content-container">
                    <AddNewStudentForm></AddNewStudentForm>
                    <div className="container">Dashboard</div>
                </div>
            </div>
        </>
    );
=======
  return (
    <>
      <AddNewStudentForm></AddNewStudentForm>
      <div>Dashboard</div>
    </>
  );
>>>>>>> Stashed changes
}
export default Dashboard;

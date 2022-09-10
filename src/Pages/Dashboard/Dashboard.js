import React from "react";
import "../../App.css";
import AddNewStudentForm from "../StudentManagement/AddNewStudentForm";
import Sidebar from "../../components/Sidebar.js";
function Dashboard() {
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
}
export default Dashboard;

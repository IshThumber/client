import { Button } from "@mui/material";
import React from "react";
import "./StudentManagement.css";

import StudentTable from "./StudentTable";
import Sidebar from "../../components/Sidebar.js";
const StudentManagement = () => {
    return (
        <>
            <div className="Flex">
                <Sidebar />
                <div className="Content-container">
                    <div className="box-container container">
                        <div className="button-row">
                            <div className="Excel-sheet-button">
                                <Button className="pro-button">Excel</Button>
                            </div>
                            <div className="Add-Student">
                                <Button className="pro-button">
                                    Add Student
                                </Button>
                            </div>
                        </div>
                        <StudentTable />
                    </div>
                </div>
            </div>
        </>
    );
};
export default StudentManagement;

import React from "react";
import "../../App.css";
import CastDataTable from "./CastDataTable";
import Sidebar from "../../components/Sidebar.js";
const Analytics = () => {
    return (
        <>
            <div className="Flex">
                <Sidebar />
                <div className="Content-container">
                    <div className="container">
                        <CastDataTable></CastDataTable>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Analytics;

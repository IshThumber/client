import React, { useState } from "react";
import "./Analytics.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import StandardsList from "../ManageStudents/StandardsList";

const Analytics = () => {
    const [standard, setStandard] = useState(0); //useState for set standard which is selected by user
    const [standardsList, setStandardList] = useState([]); // useSate for set standardList which comes from backend

    //event handler for standard drop down
    function handleStandard() {
        var a = document.getElementById("standard");
        setStandard(a.value);
    }

    // Handler calls method for fetching list from backend
    async function handleStandardList() {
        setStandardList(await StandardsList());
    }

    return (
        <>
            <div>
                <Sidebar />
                <div className="header">
                    <div className="logo">Analytics</div>
                </div>
                <div className="Content-container">
                    <div className="drop-down-standard-manageStudent">
                        <label>Choose a standard:</label>

                        <select
                            onClick={handleStandardList}
                            onChange={handleStandard}
                            name="standard"
                            id="standard"
                        >
                            <option value="None">None</option>

                            {standardsList.map((v) => (
                                <option key={v.key} value={v.listValue}>
                                    {v.listValue}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Analytics;

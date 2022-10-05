import React, { useState } from "react";
import "./Analytics.css";
import Sidebar from "../../components/Sidebar/Sidebar";

//create list for dynamic standard
const standardsList = [
  { key: 1, value: "1", display: 1 },
  { key: 2, value: "2", display: 2 },
  { key: 3, value: "3", display: 3 },
  { key: 4, value: "4", display: 4 },
];

const Analytics = () => {
  const [standard, setStandard] = useState(0); //useState for set standard which is selected by user

  //event handler for standard drop down
  function handleStandard() {
    var a = document.getElementById("standard");
    setStandard(a.value);
  }

  console.log(standard);
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

            <select onChange={handleStandard} name="standard" id="standard">
              <option value="None">None</option>

              {standardsList.map((v) => (
                <option key={v.key} value={v.value}>
                  {v.display}
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

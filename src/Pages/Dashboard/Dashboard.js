import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardStatusTable from "./DashboardStatusTable";
import Header from "../../components/Header/Header";

function Dashboard(props) {
  return (
    <>
      <div className="Flex">
        <Sidebar {...props}></Sidebar>
        <Header HeaderText="Dashboard" />
        <div className="Content-container">
          <div>
            <DashboardStatusTable />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;

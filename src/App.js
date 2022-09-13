import "./App.css";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Analytics from "./Pages/Analytics/Analytics.js";
import StudentManagement from "./Pages/StudentManagement/StudentManagement.js";
import Credentials from "./Pages/CredentialsManagement/CredentialsManagement.js"
import Login from "./components/Login.js";

function App() {
  return (
    <>

      <Router>
        <div className="Flex">
          <div className="Sidebar-container">
            <Sidebar />
          </div>
          <div className="Content-container">
            <Switch>
              <Route exact path="/">
                <div className="container">
                  <Dashboard />
                </div>
              </Route>
              <Route exact path="/StudentManagement">
                <div className="container">
                  <StudentManagement />
                </div>
              </Route>
              <Route exact path="/Analytics">
                <div className="container">
                  <Analytics />
                </div>
              </Route>
              <Route path="/Credentials">
                <div className="container">
                  <Credentials />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

      {/* <Login></Login> */}


    </>
  );
}

export default App;

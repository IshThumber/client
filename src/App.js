import "./App.css";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Credentials from "./Pages/CredentialsManagement/CredentialsManagement.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Analytics from "./Pages/Analytics/Analytics.js";
import StudentManagement from "./Pages/StudentManagement/StudentManagement.js";
import Login from "./components/Login";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin/" element={<Dashboard />} />
                    <Route
                        path="/admin/StudentManagement/*"
                        element={<StudentManagement />}
                    />
                    <Route path="/admin/Analytics/*" element={<Analytics />} />
                    <Route
                        path="/admin/Credentials/*"
                        element={<Credentials />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;

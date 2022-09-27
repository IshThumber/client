import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import ManageCredentials from "../Pages/ManageCredentials/ManageCredentials";
import Dashboard from "../Pages/Dashboard/Dashboard"
import Analytics from "../Pages/Analytics/Analytics.js";
import ManageStudents from "../Pages/ManageStudents/ManageStudents";
import Login from "../Pages/Login/Login";
import Standard from "../Pages/Standard/standard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [standard, setStandard] = useState("");
  async function isAuth() {
    try {
      const res = await fetch("http://localhost:5050/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await res.json();

      if (parseRes.isAuthenticated === true) {
        setIsAuthenticated(true);
        setIsAdmin(parseRes.isAdmin);
        setStandard(parseRes.standard);
        toast.success("Login Successful!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeButton: false,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  let props = {
    setAuth: (boolean) => {
      setIsAuthenticated(boolean);
    },
    setAdmin: (boolean) => {
      setIsAdmin(boolean);
    },
    setStd: (String) => {
      setStandard(String);
    },
  };
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="*" element={<Navigate replace to={"/login"} />} />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login {...props} />
              ) : isAdmin ? (
                <Navigate replace to={"/admin/"} />
              ) : (
                <Navigate replace to={"/:standard"} />
              )
            }
          />
          <Route
            path="/admin/"
            element={
              isAuthenticated ? (
                isAdmin ? (
                  <Dashboard {...props} />
                ) : (
                  <Navigate replace to={"/:standard"} />
                )
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route
            path="/admin/StudentManagement"
            element={
              isAuthenticated ? (
                isAdmin ? (
                  <ManageStudents {...props} />
                ) : (
                  <Navigate replace to={"/:standard"} />
                )
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route
            path="/admin/Analytics/*"
            element={
              isAuthenticated ? (
                isAdmin ? (
                  <Analytics {...props} />
                ) : (
                  <Navigate replace to={"/:standard"} />
                )
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route
            path="/admin/Credentials/*"
            element={
              isAuthenticated ? (
                isAdmin ? (
                  <ManageCredentials {...props} />
                ) : (
                  <Navigate replace to={"/:standard"} />
                )
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route
            path="/:standard"
            element={
              isAuthenticated ? (
                !isAdmin ? (
                  <Standard {...props} standard={standard} />
                ) : (
                  <Navigate replace to={"/:standard"} />
                )
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

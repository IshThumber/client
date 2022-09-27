import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toast } from "react-toastify";

function Dashboard(props) {
  const styleToast = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
  };

  const onLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
    props.setAdmin(false);
    toast.success("Logout Successful!", styleToast);
  };
  return (
    <>
      <div className="Flex">
        <Sidebar />
        <div className="Content-container form">
          <button onClick={onLogOut} className="btn-sub">
            Log Out
          </button>
          {/* <div className="container">Dashboard</div> */}
        </div>
      </div>
    </>
  );
}
export default Dashboard;

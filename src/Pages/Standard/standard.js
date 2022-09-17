import React, { useState } from "react";
import "../../App.css";
import { toast } from "react-toastify";

function Standard(props) {
    const styleToast = {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
    };

    const [standard] = useState(props.standard);

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
                <div className="Content-container form">
                    <button onClick={onLogOut} className="btn-sub">
                        Log Out
                    </button>
                    <div className="container">Standard {standard}</div>
                </div>
            </div>
        </>
    );
}
export default Standard;

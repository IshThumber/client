import React, { useState } from "react";
import "../../App.css";

function Standard(props) {
    const [standard] = useState(props.standard);

    const onLogOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        props.setAuth(false);
        props.setAdmin(false);
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

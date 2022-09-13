import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import pic1 from "./ec1.svg"
import pic2 from "./ec2.svg"
import pic3 from "./ec3.svg"


function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: 0,
        password: "",
    });

    // Handle Input
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    };

    // Handle Login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { userName, password } = user;
        try {
            const res = await fetch("http://localhost:5050/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName: userName,
                    password: password,
                }),
            });

            if (res.status === 404 || !res) {
                window.alert("Invalid Credentials");
            } else if (res.status === 200) {
                // Admin
                window.alert("Login Successfull --> Admin");
                navigate("/admin/");
                window.location.reload();
            } else {
                // Teacher
                window.alert("Login Successfull --> Teacher");
                navigate("/userName/");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <section className="full-screen-container-login">
                <img className="ec1" src={pic1} alt="Design 1" property="1" />
                <img className="ec2" src={pic2} alt="Design 2" property="2" />
                <img className="ec3" src={pic3} alt="Design 3" property="3" />

                <div className="sign-in-container">
                    <h1 className="app-name">App Name</h1>
                    <h2 className="login-title">Login</h2>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="input-container">
                            {/* <label htmlFor="email">Email</label> */}
                            <input
                                type="number"
                                name="userName"
                                id="email" placeholder="Id"
                                value={user.userName}
                                onChange={handleChange} />
                        </div>

                        <div className="input-container">
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="password"
                                name="password"
                                id="password" placeholder="Password"
                                value={user.password}
                                onChange={handleChange} />
                        </div>
                        <button
                            type="submit"
                            className="btn-sub">
                            Log In
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login

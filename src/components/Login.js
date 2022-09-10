import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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
            <section className="full-screen-container">
                <div className="clip"></div>
                <div className="sign-in-container">
                    <h1 className="sign-in-title">Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input
                                type="number"
                                name="userName"
                                id="email"
                                value={user.userName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn-sub">
                            Log In
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;

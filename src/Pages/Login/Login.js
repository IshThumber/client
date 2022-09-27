import React, { useState } from "react";
import "./Login.css";
import pic1 from "./ec1.svg";
import pic2 from "./ec2.svg";
import pic3 from "./ec3.svg";
import logo from "./logo.png";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

function Login(props) {
    const [user, setUser] = useState({
        userName: "",
        password: "",
    });
    //for changing state of passwird toggle
    const [state, setState] = useState(true);

    //for toggle button
    const toggleBtn = () => {
        setState(prevState => !prevState);
    }

    // Handle Input
    const handleChange = (event) => {
        if (event.target.name === "userName") {
            const re = /^[0-9\b]+$/;

            if (event.target.value === "" || re.test(event.target.value)) {
                let name = event.target.name;
                let value = event.target.value;

                setUser({ ...user, [name]: value });
            }
        } else {
            let name = event.target.name;
            let value = event.target.value;

            setUser({ ...user, [name]: value });
        }
    };

    // Handle Login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { userName, password } = user;
        try {
            const res = await fetch("http://localhost:5050/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName: userName,
                    password: password,
                }),
            });

            if (res.status === 422) {
                window.alert("Enter Username and Password!!!");
            } else if (res.status === 401) {
                window.alert("Enter valid credentials!!!");
            } else {
                const parseRes = await res.json();

                localStorage.setItem("token", parseRes.token);

                props.setAuth(true);

                props.setAdmin(parseRes.isAdmin);

                props.setStd(parseRes.standard);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <section className="full-screen-container-login">
                <img className="ec1" src={pic1} alt="Design 1" property="1" />
                <img className="ec2" src={pic2} alt="Design 2" property="2" />
                <img className="ec3" src={pic3} alt="Design 3" property="3" />

                <div className="sign-in-container">
                    <img className="logo" src={logo} alt="logo" property="4" />
                    <h2 className="login-title">Login</h2>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="input-container">
                            {/* <label htmlFor="email">Email</label> */}
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                placeholder="Id"
                                value={user.userName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-container">
                            {/* <label htmlFor="password">Password</label> */}
                            <input
                                type={state ? "password" : "text"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                            />

                            <i onClick={toggleBtn}>
                                {
                                    state ? <AiFillEye /> : <AiFillEyeInvisible />
                                }
                            </i>
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

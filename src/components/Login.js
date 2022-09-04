import React from "react";
import "./Login.css";

function login() {
  return (
    <>
      <section className="full-screen-container">
        <div className="clip"></div>
        <div className="sign-in-container">
          <h1 className="sign-in-title">Sign In</h1>
          <form action="post" className="form">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="email" name="email" id="email" />
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

export default login;

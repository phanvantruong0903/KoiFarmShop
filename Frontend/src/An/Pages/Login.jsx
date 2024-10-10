import React, { useState } from "react";
import "../Css/Login.css";
import SignInForm from "../Components/LogIn";
import SignUpForm from "../Components/SignUp";
import { useLocation } from "react-router-dom";
export default function LoginPage() {
  const location = useLocation(); // Get the location object
  const initialType = location.state?.type || "signIn";
  const [type, setType] = useState(initialType);
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const containerClass =
    "container-form " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      <div
        className={containerClass}
        id="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

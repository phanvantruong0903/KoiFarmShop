import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";


function SignInForm() {
    const { googleAuthUrl, login } = useAuth();
    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = evt => {
        evt.preventDefault();

        const { email, password } = state;
        alert(`You are login with email: ${email} and password: ${password}`);
        login(email, password).then((result) => {
            if (result) {
                alert("Login successfully");
                navigate("/DashBoard/staff/Profiles");
            }
        })
        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Sign in</h1>
                <div className="social-container">

                    <Link to={googleAuthUrl} className="social">
                        <FaGoogle />
                    </Link>

                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;

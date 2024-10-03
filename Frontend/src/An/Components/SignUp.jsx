import { FaGoogle } from "react-icons/fa6";
import '../Css/SignUp.css';
import useSignUpForm from "../Hooks/useSignUpForm";
import { useAuth } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUpForm() {
    const navigate = useNavigate();
    const { register, googleAuthUrl, setAuthenticatedUser } = useAuth();
    const initialState = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    };

    const [loading, setLoading] = useState(false); 

    const { state, errors, handleChange, handleSubmit } = useSignUpForm(initialState);

    const onSubmit = (e) => {
        setLoading(true); 
        console.log("package to be sent", e); 
        register(e.name, e.email, e.password, e.confirm_password)
            .then((response) => {
                if (response.status === 200) {
                    const { access_token, refresh_token } = response.data.result;
                    setAuthenticatedUser(access_token, refresh_token);
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error.response);
            })
            .finally(() => {
                setLoading(false); 
            });
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={(e) => handleSubmit(onSubmit, e)}>
                <h1>Create Account</h1>
                <div className="social-container">
                    <Link to={googleAuthUrl} className="social">
                        <FaGoogle />
                    </Link>
                </div>
                <span>or use your email for registration</span>

                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder={errors.name ? errors.name : "Name"}
                    className={`input-field ${errors.name ? 'error-input' : ''}`}
                    disabled={loading} 
                />

                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder={errors.email ? errors.email : "Email"}
                    className={`input-field ${errors.email ? 'error-input' : ''}`}
                    disabled={loading} 
                />

                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder={errors.password ? errors.password : "Password"}
                    className={`input-field ${errors.password ? 'error-input' : ''}`}
                    disabled={loading} 
                />

                <input
                    type="password"
                    name="confirm_password"
                    value={state.confirm_password}
                    onChange={handleChange}
                    placeholder={errors.confirm_password ? errors.confirm_password : "Confirm Password"}
                    className={`input-field ${errors.confirm_password ? 'error-input' : ''}`}
                    disabled={loading} 
                />

                

                <button type="submit" disabled={loading}>
                    {loading ? "Signing Up..." : "Sign Up"} 
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;

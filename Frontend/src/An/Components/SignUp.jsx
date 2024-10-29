import { FaGoogle } from "react-icons/fa6";
import "../Css/SignUp.css";
import useSignUpForm from "../Hooks/useSignUpForm";
import { useAuth } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { message } from "antd";
import 'react-toastify/dist/ReactToastify.css';
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

  const { state, errors, handleChange, handleSubmit } =
    useSignUpForm(initialState);

  const onSubmit = (e) => {
    setLoading(true);
    console.log("package to be sent", e);
    register(e.name, e.email, e.password, e.confirm_password)
      .then((response) => {
        if (response.status === 200) {
          const { access_token, refresh_token } = response.data.result;
          setAuthenticatedUser(access_token, refresh_token);
          navigate(`/profile`, {
            state: { message: "Sign Up Account Successfull Please check your email inbox for verification" },
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        const errorObj = error.response.data;
        console.log(errorObj.errors);
        console.log(errorObj.errors.email);
        if (errorObj.errors.password == 'Password length must be from 8 to 50') {
          message.error('Mật khẩu phải từ 8 đến 50 ký tự');
        }
        else if (errorObj.errors.password == 'Password must be at least 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol') {
          message.error('Mật khẩu phải chứa ít nhất một số và một chữ cái viết hoa và viết thường, và ít nhất 8 ký tự');
        }
        else if (errorObj.errors.email === 'Email already exists') {
          message.error('Email đã tồn tại');
        }
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
          className={`input-field ${errors.name ? "error-input" : ""}`}
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder={errors.email ? errors.email : "Email"}
          className={`input-field ${errors.email ? "error-input" : ""}`}
          disabled={loading}
        />

        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder={errors.password ? errors.password : "Password"}
          className={`input-field ${errors.password ? "error-input" : ""}`}
          disabled={loading}
        />

        <input
          type="password"
          name="confirm_password"
          value={state.confirm_password}
          onChange={handleChange}
          placeholder={
            errors.confirm_password
              ? errors.confirm_password
              : "Confirm Password"
          }
          className={`input-field ${
            errors.confirm_password ? "error-input" : ""
          }`}
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

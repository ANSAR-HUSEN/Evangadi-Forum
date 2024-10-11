import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { GoEyeClosed, GoEye } from "react-icons/go";
import axios from "../../config/axios"

function Login({ toggleForm }) {
  //useNavigate --->to re-direct user to homepage after successful login
  const navigate = useNavigate();
  //useRef ---> allows to access input field values without causing re-renders
  const emailDom = useRef();
  const passwordDom = useRef();
  const [showPassword, setShowPassword] = useState(false);
  //password is hidden by default

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    //function runs when the user submits the form

    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (!emailValue || !passwordValue) {
      alert("Please provide all required information");
      return;
    }

    try {
     const response = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      localStorage.setItem("token",response?.data?.token)
      console.log(response.data);
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  }

  return (
    <section className="login">
      <div className="login__container">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Login to your account</h3>
            <p>
              Don't have an account?{" "}
              <a onClick={toggleForm}>Create a new account</a>
            </p>

            <input
              className="emailField"
              type="email"
              placeholder="Email address"
              ref={emailDom}
            />
          </div>
          <br />

          <div className="password__container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              ref={passwordDom}
            />
            <span
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <GoEye /> : <GoEyeClosed />}
            </span>
            <span className="forget_pass">
              <a href="">Forgot password? </a>
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Login;

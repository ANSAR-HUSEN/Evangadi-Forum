import React, { useRef } from "react";
import "./SignUp.css";
import axios from "../../config/axios";
import { FaEyeSlash } from "react-icons/fa";
import LayOut from "../../Pages/Layout/LayOut";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp({ toggleForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate()
  const emailDom = useRef();
  const passwordDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const userNameDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    //function runs when the user submits the form

    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;
    const firstNameValue = firstNameDom.current.value;
    const lastNameValue = lastNameDom.current.value;
    const userNameValue = userNameDom.current.value;

    if (!emailValue || !passwordValue || !firstNameValue || !lastNameValue || !userNameValue ) {
      alert("Please provide all required information");
      return;
    }

    try {
      await axios.post("/users/register", {
        email: emailValue,
        password: passwordValue,
        firstname:firstNameValue,
        lastname:lastNameValue,
        username:userNameValue
      });
      alert("user registered  Successfully");
      navigate("/login");
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  }


  return (
    <div className="signUp">
      <div className="accountTitle">
        <h1>Join the network</h1>
        <h3>
          Already have an account? <a onClick={toggleForm}>Sign in</a>
        </h3>
      </div>
      <div>
        <form  onSubmit={handleSubmit} action="#">
          <div className="bigInput">
            <input ref={emailDom} type="email" placeholder="Email" />
          </div>
          <div className="smallInput">
            <input ref={firstNameDom} className="second" type="text" placeholder="First Name" />
            <input ref={lastNameDom} type="text" placeholder="Last Name" />
          </div>
          <div className="bigInput">
            <input ref={userNameDom} type="text" placeholder="User Name" />
            <input
            ref={passwordDom}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span className="eye" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="btn">
            <button type="submit">Agree and Join</button>
          </div>
        </form>
        <div>
          <h4>
            I agree to the{" "}
            <a href="" target="_blank">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="" target="_blank">
              terms of service.
            </a>
          </h4>
          <h4>
            <a href="" target="_blank">
              Already have an account?
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

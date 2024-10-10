import React from "react";
import "./SignUp.css";
import { FaEyeSlash } from "react-icons/fa";
import LayOut from "../../Pages/Layout/LayOut";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

function SignUp({ toggleForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signUp">
      <div className="accountTitle">
        <h1>Join the network</h1>
        <h3>
          Already have an account? <a onClick={toggleForm}>Sign in</a>
        </h3>
      </div>
      <div>
        <form action="#">
          <div className="bigInput">
            <input type="email" placeholder="Email" />
          </div>
          <div className="smallInput">
            <input className="second" type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="bigInput">
            <input type="text" placeholder="User Name" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button className="eye" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="btn">
            <button>Agree and Join</button>
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

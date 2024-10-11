import React, { useRef, useState } from "react";
import "./SignUp.css";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import axios from "../../config/axios";

function SignUp({ toggleForm }) {
  const [passwordValue, setPasswordValue] = useState("");
  const [type, setType] = useState("password");

  // navigate to login page
  const navigate = useNavigate();

  // refs
  const username = useRef();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();

  // function to handle form submit
  async function handelSubmit(e) {
    e.preventDefault();

    const usernameValue = username.current.value;
    const firstnameValue = firstname.current.value;
    const lastnameValue = lastname.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordValue
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });

      alert("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert(
        error.response?.data?.message || "Failed to register. Please try again."
      );
    }
  }

  // function to toggle password type
  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="signUp">
      <div className="signUp__container">
        <h3 className="signUp--title">Join the network</h3>
        <p className="signUp--subtitle">
          Already have an account? <a onClick={toggleForm}>Sign in</a>
        </p>
        <form className="signUp__form" onSubmit={handelSubmit}>
          <input ref={username} type="text" placeholder="Username" required />
          <div className="signUp__form-names">
            <input
              ref={firstname}
              type="text"
              placeholder="First name"
              required
            />
            <input
              ref={lastname}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            required
          />
          <div className="signUp__form-password">
            <input
              ref={password}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              type={type}
              placeholder="Password"
              required
            />
            <span className="signUp__form-icon" onClick={handleToggle}>
              {type === "password" ? <GoEyeClosed /> : <GoEye />}
            </span>
          </div>
          <small>
            I agree to the {""}
            <a href="https://www.evangadi.com/legal/privacy/" target="_blank">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="https://www.evangadi.com/legal/privacy/" target="_blank">
              terms of service
            </a>
            .
          </small>
          <button className="signUp__btn">Agree and Join</button>
        </form>
        <h4 className="signUp__bottom_text">
          <a onClick={toggleForm}>Already have an account?</a>
        </h4>
      </div>
    </div>
  );
}

export default SignUp;

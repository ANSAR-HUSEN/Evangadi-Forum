import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div>
      <div className="signUp">
        <div className="accountTitle">
          <h1>Join the network</h1>
          <h3>
            Already have an account? <a href="">Sign in</a>
          </h3>
        </div>
        <div>
          <form action="#">
            <div className="bigInput">
              <input type="email" placeholder="Email" />
            </div>
            <div className="smallInput">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="bigInput">
              <input type="text" placeholder="User Name" />
              <input type="text" placeholder="Password" />
            </div>
            <div className="btn">
              <button>Agree and Join</button>
            </div>
          </form>
          <div>
            <h4>
              I agree to the <a href="">privacy policy</a> and{" "}
              <a href="">terms of service.</a>
            </h4>
            <h4>
              <a href="">Already have an account?</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

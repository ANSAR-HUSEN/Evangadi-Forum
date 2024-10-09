import React, { useState, useEffect, useRef } from "react";
import LayOut from "../Layout/LayOut";
import SignUp from "../../Components/SignUp/SignUp";
import About from "../../components/About/About";
import SignIn from "../../Components/Login/Login";
import "./Auth.css";
import { useLocation, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Auth = () => {
  // Get the current location and navigate function
  const location = useLocation();
  const navigate = useNavigate();

  // State to toggle between signIn and signUp form
  const [isSignIn, setIsSignIn] = useState(true);

  // Refs for CSSTransition to avoid findDOMNode
  const signInRef = useRef(null);
  const signUpRef = useRef(null);

  // Toggle between signIn and signUp form based on the current location
  useEffect(() => {
    if (location.pathname === "/register") {
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  }, [location.pathname]);

  const toggleForm = () => {
    if (isSignIn) {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  return (
    <LayOut>
      <div className="auth">
        <div className="auth--container">
          <div className="auth--outer-wrap">
            <div className="auth--signIn-signUp">
              <div className="auth--signIn-signUp-container">
                <TransitionGroup className="auth-containerTransitionGroup">
                  <CSSTransition
                    key={isSignIn ? "sign-in" : "sign-up"}
                    timeout={300}
                    classNames="slide"
                    nodeRef={isSignIn ? signInRef : signUpRef} // Use the appropriate ref
                  >
                    {isSignIn ? (
                      <div ref={signInRef}>
                        <SignIn toggleForm={toggleForm} />
                      </div>
                    ) : (
                      <div ref={signUpRef}>
                        <SignUp toggleForm={toggleForm} />
                      </div>
                    )}
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
            <div className="auth--about">
              <About />
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Auth;

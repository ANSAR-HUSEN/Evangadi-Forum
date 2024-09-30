import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
   const navigate = useNavigate();
   const emailDom = useRef();
   const passwordDom = useRef();

   async function handleSubmit(e) {
      e.preventDefault();

      const emailValue = emailDom.current.value;
      const passwordValue = passwordDom.current.value;

      if (!emailValue || !passwordValue) {
         alert("Please provide all required information");
         return;
      }

      try {
         await axios.post("/users/login", {
            email: emailValue,
            password: passwordValue,
         });
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
                     Don't have an account? <a href="">Create a new account</a>
                  </p>

                  <input className="emailField"
                     type="email"
                     placeholder="email address"
                     ref={emailDom}
                  />
               </div>
               <br />

               <div>
                  <input
                     type="password"
                     placeholder="password"
                     ref={passwordDom}
                  />
                  <p className="pass">
                     <a href="">Forgot password?</a>
                  </p>
               </div>
               <button type="submit">
                  Login
               </button>
            </form>
         </div>
      </section>
   );
}

export default Login;

import React from "react";
import "./header.css";

function header() {
  return (
    <header className="all_container">
      <div className="logo">
        <a href="">
          <img
            src="https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/evangadi-logo-black.png"
            alt="img"
          ></img>
        </a>
      </div>

      <div className="menu">
        <ul className="menu_beranch">
          <li>
            <button>SIGN IN</button>
          </li>
          <li>
            <a href="#">How it Works</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default header;

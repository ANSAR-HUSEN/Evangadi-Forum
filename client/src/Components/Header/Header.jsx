// import React from "react";
import "./Header.css";
import logo from "../../assets/images/logos/evangadi_main_logo_black.png";
import { useState, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../App";

function Header() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  // access the user and setUser from the context

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className={`header-logo ${isOpen ? "active" : ""}`}>
          <Link to="/">
            <img src={logo} alt="evangadi logo" />
          </Link>
        </div>

        <div className="header__nav-wrap">
          <nav className={`header__nav-container ${isOpen ? "" : "active"}`}>
            <ul className="header__nav-lists">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">How it Works</Link>
              </li>
            </ul>
            {/* Conditionally render Sign In or Sign Out button based on user authentication */}
            {user && user.username ? (
              <button className="header__nav__btn" onClick={handleLogout}>
                Sign Out
              </button>
            ) : (
              <button
                className="header__nav__btn"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            )}
          </nav>
          <div
            className="header__nav-hamburger"
            onClick={() => setOpen(!isOpen)}
          >
            <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

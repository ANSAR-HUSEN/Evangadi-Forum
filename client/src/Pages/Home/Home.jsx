import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";

//main home page
function Home() {
  return (
    <section className="home_container">
      {/* button container for asking questions and welcoming the user  */}
      <div className="btn_container">
        <a href="">
          {/* link for ask question button  */}
          <button className="ask_blue">Ask Question</button>
        </a>
        <p>
          welcome: <span>user</span>
          {/* greeting the username  */}
        </p>
      </div>
      {/* search input for questions  */}
      <div className="search_container">
        <input type="text" placeholder="Search question" />
      </div>
      {/* horizontal separate line  */}
      <div className="horizontal_line">
        <hr />
      </div>
      {/* user details section  */}
      <div className="user_container">
        <a href="" className="link">
          <div className="profile_container">
            <div className="user_icon">
              <AccountCircleIcon />
              {/* user icon  */}
              <p>sisay</p>
              {/* user name  */}
            </div>
            <p className="question">javascript</p>
            {/* user question */}

            <div className="angle_icon">
              <ChevronRightIcon />
              {/* chevron icon for navigation  */}
            </div>
          </div>
        </a>
      </div>
      <div className="horizontal_line">
        <hr />
      </div>
      <div className="user_container">
        <a href="" className="link">
          <div className="profile_container">
            <div className="user_icon">
              <AccountCircleIcon />
              <p>nati</p>
            </div>
            <p className="question">what is jwt</p>

            <div className="angle_icon">
              <ChevronRightIcon />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home;

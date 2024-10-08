import React, { useContext, useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";
import LayOut from "../Layout/LayOut";
import { Link } from "react-router-dom";
import axios from "../../axios";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
// import { AppState } from "../../App";

//main home page
function Home() {
  // const {user} = useContext(AppState);//how send globally
  // console.log(user);
  
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    axios.get("/question").then((res) => {
      console.log(res);
      setQuestion(res.data);

      const questionData = res.data;
    });
  }, []);

  return (
    <LayOut>
      <section className="home_container">
        {/* button container for asking questions and welcoming the user  */}
        <div className="btn_container">
          <Link to="/questionPage">
            {/* link for ask question button  */}
            <button className="ask_blue">Ask Question</button>
          </Link>
          <p>
            welcome: <span>username-user</span>
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
        {question.map((question, i) => {
          return <QuestionCard data={question} key={i} />;
        })}
    
      </section>
    </LayOut>
  );
}

export default Home;

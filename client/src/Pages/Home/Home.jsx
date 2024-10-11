import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";
import LayOut from "../Layout/LayOut";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import {AuthContext} from '../../App'
import { useContext } from "react";
import QuestionCard from "../../Components/QuestionCard";

//main home page
function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const {user} = useContext(AuthContext);
  const [allquestions, setAllQuestions] = useState([]);
  

console.log(user);

  useEffect(() => {

    
    const fetchQuestions = async () => {
      try {
        const allQuestion = await axios.get("/question");
        setAllQuestions(allQuestion.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
    
  }, [user]);

  const filterdQuestion = allquestions.filter((question)=>(
    question.title.toLowerCase().includes(searchQuery.toLowerCase())


  ))
  console.log(allquestions);

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
            welcome: <span>{user.username}</span>
            {/* greeting the username  */}
          </p>
        </div>
        {/* search input for questions  */}
        <div className="search_container">
          <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder="Search question" />
        </div>
        {/* horizontal separate line  */}
        <div className="horizontal_line">
          <hr />
        </div>
        {/* user details section  */}
        {filterdQuestion.length>0? (
          filterdQuestion.map((question,i)=>(
            <QuestionCard key={i} Questions={question} />
          ))
        ):(<p>No Question Found</p>)
         
        }
        
      </section>
    </LayOut>
  );
}

export default Home;

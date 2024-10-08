import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import './QuestionCard.css'
import { Link } from "react-router-dom";

function QuestionCard(data) {
    console.log(data);
    const {title, username, description} = data.data;

    console.log(username);
    

    
  return (
    <>
      <div className="user_container">
        <Link to="singleQuestion" className="link">
          <div className="profile_container">
            <div className="user_icon">
              <AccountCircleIcon />
              <p>{username}</p>
            </div>
            <p className="question">{title}</p>

            <div className="angle_icon">
              <ChevronRightIcon />
            </div>
          </div>
        </Link>
      </div>
      <div className="horizontal_line">
        <hr />
      </div>
    </>
  );
}

export default QuestionCard;

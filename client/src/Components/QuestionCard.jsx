import React from 'react';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import '../Pages/Home/Home.css'
import { Link } from 'react-router-dom';

function QuestionCard({Questions}) {
    console.log(Questions);
    const {title,description,username,questionid}= Questions;
  return (
    <div>
        <div className="user_container">
          <Link to={`/answer/${questionid}`} className="link">
            <div className="profile_container">
              <div className="user_icon">
                <AccountCircleIcon />
                {/* user icon  */}
                <p>{username}</p>
                {/* user name  */}
              </div>
              <p className="question">{title}</p>
              {/* user question */}

              <div className="angle_icon">
                <ChevronRightIcon />
                {/* chevron icon for navigation  */}
              </div>
            </div>
          </Link>
        </div>
        <div className="horizontal_line">
          <hr />
        </div>

    </div>
  )
}

export default QuestionCard
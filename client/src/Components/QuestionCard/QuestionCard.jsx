import React from "react"; // Import the React library to use React features.
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import the ChevronRightIcon from Material UI for UI/UX.
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import the AccountCircleIcon to represent the user.
import "../Pages/Home/Home.css"; // Import the CSS file to apply styles to the component.
import { Link } from "react-router-dom"; // Import Link from react-router-dom to enable navigation between routes.

function QuestionCard({ Questions }) {
  // Define a functional component called QuestionCard which receives a prop named Questions.
  console.log(Questions); // Log the Questions prop to the console for debugging purposes.

  // Destructure the Questions object to extract individual properties
  const { title, description, username, questionid } = Questions; // Get title, description, username, and questionid from Questions prop.

  return (
    // Start returning the JSX to render the UI.
    <div>
      <div className="user_container">
        {" "}
       {/* Main container for the user question and profile information. */}
        <Link to={`/answer/${questionid}`} className="link">
          {" "}
          {/* // Create a Link that navigates to the answer page of this question using questionid. */}
          <div className="profile_container">
            {" "}
            {/* // Container for the profile icon and question text. */}
            <div className="user_icon">
              {" "}
              {/* // Sub-container for the user icon and username. */}
              <AccountCircleIcon /> 
              {/* // Render the user icon. */}
              <p>{username}</p>
               {/* // Display the username associated with the question. */}
            </div>
            <p className="question">{title}</p> 
            {/* // Display the question title. */}
            <div className="angle_icon">
              {" "}
              {/* // Sub-container for the chevron icon. */}
              <ChevronRightIcon /> 
              {/* // Render the chevron icon for indicating navigation. */}
            </div>
          </div>
        </Link>
      </div>
      <div className="horizontal_line">
        {" "}
        {/* // Horizontal line separator for better UI. */}
        <hr /> 
        {/* // Render a horizontal line. */}
      </div>
    </div>
  );
}

export default QuestionCard; // Export the QuestionCard component for use in other parts of the app.

// import React from 'react'
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import './QuestionCard.css'
// import { Link } from "react-router-dom";

// function QuestionCard(data) {
//     console.log(data);
//     const {title, username, description} = data.data;

//     console.log(username);
//   return (
//     <>
//       <div className="user_container">
//         <Link to="/AnswerPage" className="link">
//           <div className="profile_container">
//             <div className="user_icon">
//               <AccountCircleIcon />
//               <p>{username}</p>
//             </div>
//             <p className="question">{title}</p>

//             <div className="angle_icon">
//               <ChevronRightIcon />
//             </div>
//           </div>
//         </Link>
//       </div>
//       <div className="horizontal_line">
//         <hr />
//       </div>
//     </>
//   );
// }

// export default QuestionCard;

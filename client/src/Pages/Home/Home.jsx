import React, { useEffect, useState } from "react"; // Import necessary React hooks for managing state and side effects
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import icon component for future use
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import icon component for future use
import "./Home.css"; // Importing the CSS styles for this component
import LayOut from "../Layout/LayOut"; // Importing the layout component to wrap around the Home component
import { Link } from "react-router-dom"; // Importing Link to create navigation links
import axios from "../../config/axios"; // Importing axios instance for making HTTP requests
import { AuthContext } from "../../App"; // Importing authentication context to access user data
import { useContext } from "react"; // Importing useContext hook to access context values
import QuestionCard from "../../Components/QuestionCard"; // Importing the QuestionCard component to render questions

// Main Home page component
function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search query input by the user
  const { user } = useContext(AuthContext); // Accessing the user object from the AuthContext to greet the user
  const [allquestions, setAllQuestions] = useState([]); // State to store all questions fetched from the server

  // Console log the user object to see the current user data in the console
  console.log(user);

  // useEffect to fetch questions from the server when the component mounts or when user changes
  useEffect(() => {
    const fetchQuestions = async () => {
      // Asynchronous function to fetch questions
      try {
        const allQuestion = await axios.get("/question"); // Making a GET request to fetch questions
        setAllQuestions(allQuestion.data); // Storing fetched questions in state
      } catch (error) {
        console.error(error); // Logging any errors to the console
      }
    };

    fetchQuestions(); // Calling the function to fetch questions
  }, [user]); // Dependency array: runs effect when 'user' changes

  // Filtering the questions based on the search query
  const filterdQuestion = allquestions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase()) // Checking if question title includes the search query
  );

  // Logging the filtered questions to the console
  console.log(allquestions);

  // JSX to render the component
  return (
    <LayOut>
      {" "}
      {/* Wrapping the content with the Layout component */}
      <section className="home_container">
        {" "}
        {/* Main container for the home page */}
        <div className="btn_container">
          {" "}
          {/* Container for buttons and welcome message */}
          <Link to="/questionPage">
            {" "}
            {/* Navigation link to question page */}
            <button className="ask_blue">Ask Question</button>{" "}
            {/* Button to ask a new question */}
          </Link>
          <p>
            {" "}
            {/* Displaying a welcome message */}
            welcome: <span>{user.username}</span>{" "}
            {/* Displaying the username of the logged-in user */}
          </p>
        </div>
        <div className="search_container">
          {" "}
          {/* Container for search input */}
          <input
            value={searchQuery} // Binding the input value to the state
            onChange={(e) => setSearchQuery(e.target.value)} // Updating search query state on input change
            type="text"
            placeholder="Search question" // Placeholder text for the input field
          />
        </div>
        <div className="horizontal_line">
          {" "}
          {/* Container for the horizontal line */}
          <hr /> {/* Horizontal line for visual separation */}
        </div>
        {/* Displaying filtered questions or a message when no questions are found */}
        {filterdQuestion.length > 0 ? (
          filterdQuestion.map(
            (
              question,
              i // Mapping through filtered questions
            ) => (
              <QuestionCard key={i} Questions={question} /> // Rendering each question in a QuestionCard component
            )
          )
        ) : (
          <p>No Question Found</p> // Message to display if no questions are found based on the search criteria
        )}
      </section>
    </LayOut>
  );
}

export default Home; // Exporting the Home component for use in other parts of the application





// import React, { useContext, useEffect, useState } from "react";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import "./Home.css";
// import LayOut from "../Layout/LayOut";
// import { Link } from "react-router-dom";
// import axios from "../../axios";
// import QuestionCard from "../../Components/QuestionCard/QuestionCard";
// // import { AppState } from "../../App";

// //main home page
// function Home() {
//   // const {user} = useContext(AppState);//how send globally
//   // console.log(user);

//   const [question, setQuestion] = useState([]);

//   useEffect(() => {
//     axios.get("/question").then((res) => {
//       console.log(res);
//       setQuestion(res.data);

//       const questionData = res.data;
//     });
//   }, []);

//   return (
//     <LayOut>
//       <section className="home_container">
//         {/* button container for asking questions and welcoming the user  */}
//         <div className="btn_container">
//           <Link to="/questionPage">
//             {/* link for ask question button  */}
//             <button className="ask_blue">Ask Question</button>
//           </Link>
//           <p>
//             welcome: <span>username-user</span>
//             {/* greeting the username  */}
//           </p>
//         </div>
//         {/* search input for questions  */}
//         <div className="search_container">
//           <input type="text" placeholder="Search question" />
//         </div>
//         {/* horizontal separate line  */}
//         <div className="horizontal_line">
//           <hr />
//         </div>
//         {/* user details section  */}
//         {question.map((question, i) => {
//           return <QuestionCard data={question} key={i} />;
//         })}

//       </section>
//     </LayOut>
//   );
// }

// export default Home;

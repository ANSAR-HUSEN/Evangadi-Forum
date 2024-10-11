import LayOut from "../Layout/LayOut";
import { FaCircleArrowRight } from "react-icons/fa6";
import userAvatar from "../../assets/icons/user-avatar.svg";
import "./Answer.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "../../config/axios";
import { AuthContext } from "../../App";

function Answer() {
  const { user } = useContext(AuthContext);

  const { question_id } = useParams(); // Get question_id from URL
  const [askedQuestion, setAskedQuestion] = useState(null); //Store question details
  const [answerList, setAnswerList] = useState([]); // Store answers
  const [newAnswer, setNewAnswer] = useState(""); // Store new answer

  // console.log(question_id);
  // Fetch question details and answers when component mounts
  useEffect(() => {
    const fetchQuestionDetails = async () => {
      try {
        // Fetch the question
        const questionRes = await axios.get(`/question/${question_id}`);
        setAskedQuestion(questionRes.data.question);
        console.log(questionRes.data);

        // fetch the answer list
        const answerRes = await axios.get(`/answer/${question_id}`);
        setAnswerList(answerRes.data.answers);
        // console.log(answerRes);
      } catch (error) {
        console.error("Error fetching question details", error);
      }
    };
    fetchQuestionDetails();
  }, [question_id]);

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You need to be logged in to post an answer.");
      return;
    }

    if (!newAnswer) {
      alert("Please enter your answer");
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage

      // Post the new answer with user information and token
      await axios.post(
        `/answer`,
        {
          questionid: question_id,
          answer: newAnswer,
          // userid: user.userid, // Include the logged-in user's ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      // Clear the answer input field after submission
      setNewAnswer("");

      // Fetch the updated answer list
      const answerRes = await axios.get(`/answer/${question_id}`);
      setAnswerList(answerRes.data.answers); // Update the answer list
    } catch (error) {
      console.error("Error submitting answer", error);
    }
  };

  // console.log();
  return (
    <LayOut>
      <div className="answer">
        <div className="answer--container">
          {/* // answer header */}
          <div className="answer-header">
            <h1>Question</h1>
            {askedQuestion && (
              <div className="answer-header-question">
                <div className="answer-header-question-title">
                  <span>
                    <FaCircleArrowRight size={20} />
                  </span>
                  <h2>{askedQuestion.title}</h2>
                </div>
                <span className="answer-title-underline"></span>
                <div className="answer-header-question-description">
                  <p>{askedQuestion.description}</p>
                </div>
                <span className="answer-header-question-date">
                  asked on:{" "}
                  {new Date(askedQuestion.created_at).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>

          <hr />
          {/* Answer comity header title */}
          <h1>Answer From The Community</h1>
          <hr />
          <div className="answer-ofList-container">
            {answerList.length > 0 ? (
              answerList.map((answer) => (
                <>
                  <div key={answer.answer_id} className="answer--question-card">
                    <div className="answer--question-card-user">
                      <img
                        src={userAvatar}
                        style={{ width: "60px", height: "60px" }}
                        alt="user"
                      />
                      <h4>{answer.user_name}</h4>
                    </div>
                    <div className="answer--question-card-title">
                      <p>{answer.content}</p>
                    </div>
                    <span className="answer--question-card-date">
                      Answered on:{" "}
                      {new Date(answer.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <hr />
                </>
              ))
            ) : (
              <p>No answers yet. Be the first to answer!</p>
            )}
          </div>

          {/* Answer content */}
          <div className="answer-content">
            <textarea
              rows="6"
              cols="100"
              placeholder="Your answer ...."
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            />
            <button onClick={handleSubmitAnswer}>Post Answer </button>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default Answer;

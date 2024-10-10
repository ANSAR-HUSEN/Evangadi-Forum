import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
// import axios from "../axios";
// import { useAppData } from "../App";

function Answer() {
  // const navigate = useNavigate();

  // const { state, dispatch } = useAppData();

  // const token = localStorage.getItem("token");
  // const { id } = useParams();

  // const [answers, setAnswers] = useState([]);
  // const [question, setQuestion] = useState([]);

  // const [loading, setLoading] = useState(false);
  // const [msg, setMsg] = useState("");

  // const inputDom = useRef();

  // const fetchAnswers = async () => {
  //   try {
  //     const { data } = await axios.get(`/answer/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setAnswers(data.answers);
  //   } catch ({ response }) {
  //     localStorage.setItem("token", "");
  //     dispatch({
  //       type: "LOGOUT",
  //     });
  //     navigate("/");
  //     console.log(response.data);
  //   }
  // };

  // const fetchQuestion = async () => {
  //   try {
  //     const { data } = await axios.get(`/question/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setQuestion(data.question);
  //   } catch ({ response }) {
  //     console.log(response.data);
  //     localStorage.setItem("token", "");
  //     dispatch({
  //       type: "LOGOUT",
  //     });
  //     navigate("/");
  //   }
  // };

  // const postAnswer = async (e) => {
  //   setMsg("");
  //   inputDom.current.style.backgroundColor = "#fff";
  //   const value = inputDom.current.value;
  //   e.preventDefault();
  //   if (!value) {
  //     inputDom.current.style.backgroundColor = "#fee6e6";
  //     inputDom.current.focus();
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.post(
  //       `/answer`,
  //       {
  //         questionid: id,
  //         answer: value,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setLoading(false);
  //     inputDom.current.style.backgroundColor = "#fff";
  //     inputDom.current.value = "";
  //     setMsg("Answer posted successfully");
  //     setTimeout(() => {
  //       setMsg("");
  //     }, 5000);
  //     fetchAnswers();
  //   } catch ({ response }) {
  //     setMsg("");
  //     setLoading(false);
  //     inputDom.current.style.backgroundColor = "#fff";
  //     localStorage.setItem("token", "");
  //     dispatch({ type: "LOGOUT" });
  //     navigate("/");
  //     console.log(response.data);
  //   }
  // };

  // useEffect(() => {
  //   fetchQuestion();
  //   fetchAnswers();
  // }, []);

  // return (
    <div className="bg-gray-100 py-20 pb-32 ">
      <div className="container md:max-w-[1000px]  mx-auto">
        <div className="question mb-5  rounded-md">
          <h2 className="mb-3 px-5 font-bold">QUESTION</h2>
          <hr />
          <hr />
          <div className="title mb-2 text flex font-bold capitalize  text-4xl">
            <span className="text-blue-900 text-2xl px-3 py-4">
              <HiArrowCircleRight />
            </span>
            {question[0]?.title}
          </div>
          <div className="description w-3/4 md:w-9/12 text-base md:text-lg pl-14  text-slate-700">
            <p> - {question[0]?.description}</p>
          </div>
        </div>
        <hr className="my-8" />
        <h1 className="text-2xl md:text-3xl font-semibold md:pl-32 ">
          Answer From The Community
        </h1>

        <hr className="my-8" />
        <div className="answer-container my-5 md:w-9/12 mx-auto max-h-96 overflow-y-auto border border-gray-300 rounded-lg p-4">
          {answers.map((el, i) => (
            <div key={i} className="flex mb-4">
              <div className="flex flex-col items-center ">
                <div className="w-12  h-12 flex justify-center items-center bg-blue-600 rounded-full ">
                  <FaUser className="text-white" />
                </div>
                <p className="text-base  font-light mb-1 mr-4">
                  {el.username}
                </p>
              </div>

              <div className="bg-gray-200 w-full px-4 rounded-md">
                <p className="text-sm md:text-base">{el.answer}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="post mx-auto md:w-9/12">
          <p className="text-green-600">{msg}</p>
          <form onSubmit={postAnswer}>
            <textarea
              ref={inputDom}
              rows="5"
              placeholder="Your answer ..."
              name="answer"
              className="w-full px-3 pt-3 pb-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              disabled={loading}
              className="btn btn-primary bg-blue-700 text-white px-5 py-3 rounded-md"
            >
              Post Answer
            </button>
          </form>
        </div>
      </div>
    </div>
  // );
}

export default Answer;
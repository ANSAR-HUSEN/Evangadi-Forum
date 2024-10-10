import React, { useRef, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import axios from "../axios";
// import { useNavigate } from "react-router-dom";
// import { useAppData } from "../App";

function Ask() {
  // const navigate = useNavigate();
  // const { dispatch } = useAppData();
  // const token = localStorage.getItem("token");

  // const [loading, setLoading] = useState(false);
  // const [msg, setMsg] = useState("");

  // const titleDom = useRef();
  // const descriptionDom = useRef();

  // const inputAlert = (dom) => {
  //   dom.current.classList.add("bg-red-100");
  //   dom.current.classList.add("border-1");
  //   dom.current.classList.add("border-red-500");

  //   dom.current.focus();
  // };

  // const postQuestion = async (e) => {
  //   titleDom.current.classList.remove("bg-red-100");
  //   titleDom.current.classList.remove("border-1");
  //   titleDom.current.classList.remove("border-red-500");

  //   descriptionDom.current.classList.remove("bg-red-100");
  //   descriptionDom.current.classList.remove("border-1");
  //   descriptionDom.current.classList.remove("border-red-500");

  //   e.preventDefault();
  //   if (!titleDom.current.value) {
  //     inputAlert(titleDom);
  //     return;
  //   }
  //   if (!descriptionDom.current.value) {
  //     inputAlert(descriptionDom);
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.post(
  //       "/question",
  //       {
  //         title: titleDom.current.value,
  //         description: descriptionDom.current.value,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setMsg("Question posted successfully. Redirecting to home page .....");
  //     titleDom.current.value = "";
  //     descriptionDom.current.value = "";

  //     setTimeout(() => {
  //       navigate("/home");
  //       setMsg("");
  //       setLoading(false);
  //     }, 5000);
  //   } catch (error) {
  //     setMsg("");
  //     setLoading(false);
  //     localStorage.setItem("token", "");
  //     dispatch({ type: "LOGOUT" });
  //     navigate("/");
  //     console.log(error.response);
  //   }
  // };

  // return (
    <div className="bg-gray-50 py-24 px-24">
      <div className=" md:max-w-[1000px] container  mx-auto">
        <div className="steps mx-3">
          <h3 className="py-3">Steps to write a good Question.</h3>

          <div className="mb-3 flex">
            <span className="text-blue-900 px-3 py-1">
              <BsFillArrowRightCircleFill />
            </span>
            Summerize your problems in a one-line-title.
          </div>
          <div className="mb-3 flex">
            <span className="text-blue-900 px-3 py-1">
              <BsFillArrowRightCircleFill />
            </span>
            Describe your problem in more detail.
          </div>
          <div className="mb-3 flex">
            <span className="text-blue-900 px-3 py-1">
              <BsFillArrowRightCircleFill />
            </span>
            Describe what you tried and what you expected to happen.
          </div>
          <div className="mb-3 flex">
            <span className="text-blue-900 px-3 py-1">
              <BsFillArrowRightCircleFill />
            </span>
            Review your question and post it here.
          </div>
        </div>
      </div>
      <div className="ask mt-5">
        <h3 className="text-center">Post Your Question</h3>
        <form onSubmit={postQuestion}>
          <p className="text-green-500 text-center">{msg}</p>
          <div className="form-title w-75 w-md-50 mx-auto my-3">
            <input
              ref={titleDom}
              placeholder="Question title"
              type="text"
              className="w-full py-2 px-3 border border-gray-300  focus:outline-none rounded"
            />
          </div>
          <div className="form-desc w-75 w-md-50 mx-auto">
            <textarea
              ref={descriptionDom}
              placeholder="Question detail ..."
              rows="4"
              className="w-full px-3 py-2 border focus:outline-none border-gray-300 rounded"
            ></textarea>
          </div>
          <div className="w-75 mx-auto mt-2">
            <button
              disabled={loading}
              className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Post Question
            </button>
          </div>
        </form>
      </div>
    </div>
  
}

export default Ask;


import React, {useState } from 'react'
import Footer from './components/footer/Footer'



import Home from "./Pages/Home/Home";


import SignUp from "./components/SignUp/SignUp";



// import Header from './componet/header/header'

import Routing from './Routing'

import { Router } from 'react-router-dom'



// import Routing from "./Routing";

export const AppState = createContext();
function App() {
  const [answers, setAnswers] = useState([]);

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  //to protect our home
  const [user, setUser] = useState([]);
  const token = localStorage.getItem('token');//bring token from localStore
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const {data} = await axios.get('/users/check', {
        headers: {
          Authorization: 'Bearer ' + token,
        },//token comes from localStore(login)
      });
      // console.log(data);
      
      setUser(data);//we have to put our data here
    } catch (error) {
      console.log(error.response);//response error 
      // navigate('/login')//back to login

    }
  }//to checkUser
  useEffect(() => {
    checkUser();//to check token on login
  }, []);
   return (
     <AppState.Provider value={{ user, setUser }}>
       <Routing />
     </AppState.Provider>
   );

}

export default App;

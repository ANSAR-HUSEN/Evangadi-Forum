import React from 'react'
import './About.css'

import LayOut from '../../Pages/Layout/LayOut'
import Login from '../../Pages/Login/Login'
import SignUp from '../SignUp/SignUp'

function About() {
  return (
<LayOut>
<div className="about">
    <div className='about__login'>
     <Login/>
     {/* <SignUp/> */}
    </div>
   <div className="about__container">
   <p>About</p>
    <h1>Evangadi Networks Q&A</h1>
   <div className="about__container_desc"
   >
   <p>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.!</p>
   <p>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
   </div>
    <button className="about__button">HOW IT WORKS</button>
   </div>

  </div>
</LayOut>
  )
}

export default About
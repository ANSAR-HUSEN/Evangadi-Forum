import React, { useContext, useEffect, useState } from 'react';
import './header.css';
import {AuthContext} from '../../App'
import { Link } from 'react-router-dom';

function Header() {
  const [signout, setSignout] = useState(false)
  const {user}= useContext(AuthContext);

  // useEffect(() => {

  //   if (user){
  //     setSignout(true)


  //   }
   
  // }, [user])
  



  return (
    <section className="header__container">
    <div className="header__logo">
      <Link to="/">
        <img
          src="https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/evangadi-logo-black.png"
          alt="img"
        ></img>
      </Link>
    </div>

    <div className="header__menu">
      <ul className='header__ul'>
      <li>
          <Link to="/">Home</Link>
        </li>
      <li>
          <Link to="#">How it Works</Link>
        </li>
       <Link to="/login">
       <li>
        <button>{user.username && user ? ("SIGN OUT"):("SIGN IN") }</button>
        </li>
       </Link>
       
       
      </ul>
    </div>
  </section>
  
  )
}

export default Header
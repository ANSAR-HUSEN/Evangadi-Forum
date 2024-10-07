import React from 'react'
import './header.css'

function Header() {
  return (
    <section className="header__container">
    <div className="header__logo">
      <a href="">
        <img
          src="https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/evangadi-logo-black.png"
          alt="img"
        ></img>
      </a>
    </div>

    <div className="header__menu">
      <ul className='header__ul'>
      <li>
          <a href="/">Home</a>
        </li>
      <li>
          <a href="#">How it Works</a>
        </li>
       <a href="/login">
       <li>
        <button>SIGN IN</button>
        </li>
       </a>
       
       
      </ul>
    </div>
  </section>
  
  )
}

export default Header
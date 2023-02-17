import React from 'react';
// import { Link } from "react-router-dom";
import './nav.css'
const search = require("../imges/search.png")
const logo = require("../imges/logo.png")
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <div className='left-nav'>
                <div className="myImg">
                 <li>
                    <img src= {logo} alt="img here" className='logo'></img>    
                 </li>
                </div>
            </div>
            <div className="right-nav">
              <li>
                <a href="/login">Log-In</a>
              </li>
              <li>
                <a href="/Signup">Sign-Up</a>
              </li>
              <div className="search">
                {/* <img src={search} alt="" /> */}
                <form action="/" method="get">
               <input type="text" placeholder='Search Your Rental' className='myInput'/>
               <button type="submit">search</button>
               </form>
              </div>
            </div>
        </ul>
      
    </div>
  )
}

export default Navbar

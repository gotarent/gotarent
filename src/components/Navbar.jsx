import React from 'react';
import { Link } from "react-router-dom";
import './nav.css'
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
                <div className="list-item">
                  <li>
                    <Link to = "/RentalRooms">Rental Rooms</Link>
                  </li>
                  <li>
                    <Link to = "/Pg">Paying Guest</Link>
                  </li>
                  <li>
                    <Link to = "Hostels">Hostels</Link>
                  </li>

                </div>
             
            </div>
            <div className="right-nav">
              <li>
                <Link to = "">Log-In</Link>
              </li>
              <li>
                <Link to = "/SignupForm">Sign-Up</Link>
              </li>
              <div className="search">
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
               <input type="text" placeholder='Search Your Rental' className='myInput'/>
              </div>
            </div>
        </ul>
      
    </div>
  )
}

export default Navbar

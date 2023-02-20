import React from 'react'
import { Link } from 'react-router-dom'
import "./U_Profile.css"
const user = require('../static/default_user.webp')
const U_Profile = () => {
    return (
        <>
            <div className="c-main-container">

                <div className="c-container">
                    <div className="aqua-container">
                        <div className="user-img">
                            <img src={user} alt="this is img" />
                        </div>
                    </div>
                    <div className="c-mid-text">
                        <div className="user-name">
                            <span className=''>Reesav Gupta</span>
                        </div>
                        <div className="user-add">
                            <i class="fa-solid fa-location-dot fa-xl"></i>
                            <span>chsiopani south szikkim</span>
                
                        </div>
                        <div className="menu">
                            <div className="bookings">
                                {/* <i class="fa-solid fa-ballot-check"></i> */}
                                {/* <i class="fa-sharp fa-solid fa-rectangle-ad"></i> */}
                                {/* <i class="fa-sharp fa-regular fa-ballot-check"></i> */}
                                {/* <i class="fa-solid fa-bars"></i> */}
                                {/* <i class="fa-solid fa-ballot"></i> */}
                                <i class="fa-solid fa-clipboard-list  icon"></i>
                                
                                <a href="#">Your Bookings</a>
                            </div>

                            <div className="adds">
                                <i class="fa-sharp fa-solid fa-rectangle-ad icon"></i>
                                <a href="#">Your Ads</a> 
                            </div>
                        </div>
                        <div className="edit-profile">
                            <button>
                                <a href="#">Edit Your Profile</a>
                            </button>
                        </div>

                    </div>

                    
                </div>

            </div>
        </>
    )
}

export default U_Profile

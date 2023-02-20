import React from 'react'
import "./card.css"
const Card = () => {
    const img = require('../static/room.jpg')
    const img1 = require('../static/logo.png')
    const arrow = require("../static/arrow.png")
    return (
        <>
            <div className="c-main-container">

                <div className="c-container">
                    <div className="aqua-container">
                        <div className="circle-group">
                            <div className="circle" id='circle-1'></div>
                            <div className="circle" id='circle-2'></div>
                            <div className="circle" id='circle-3'></div>
                        </div>
                    </div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* <div className="shadow-1"></div> */}
                    <div className="c-text-area">
                        <div className="c-head-text">
                            <p>2 Rooms Availiable With Free Wifi</p>
                        </div>
                        <div className="c-mid-text">
                            <div className="upper-text">
                                <div className='location-mark'>
                                    <i class="fa-sharp fa-solid fa-location-dot fa-2x"></i>
                                </div>
                                <div className="location-name">
                                    <p>Chisopani, South Sikkim, 737121</p>
                                </div>
                                <div className="location-price">
                                    <p> &#x20B9;4000/month</p>
                                </div>
                            </div>
                            <div className="c-bottom-text">
                                <p>experience comfort and convenience at its finest with our cozy rental property. book now and make it your home-sweethome!</p>
                            </div>
                        </div>
                        <div className="c-user">
                            <i class="fa-solid fa-user" />
                            <p>@username</p>
                        </div>
                    </div>
                </div>
                <div className="c-book-now">
                    <div className="c-s-book">
                        <div className="c-img">
                            <img src={arrow} alt="" />
                        </div>
                        <div className="c-p">
                        <p>Book now</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

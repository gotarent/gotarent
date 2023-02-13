import React from 'react'
import './midpage.css'
import "./mediaMidpage.css"
const MidPage = () => {
    let card = require("../imges/card.jpg");
    let blue = require("../imges/blue.jpg");
    return (
        <>
            <div className="main-con">
                
                <div className="container">
                    <div className="rightContainer">

                        <div className="head-text">
                            <h2>Rent a Room near you or sharte yours when you're not using it!</h2>
                        </div>
                        <div className="mid-container">
                            <div className="myImgs">
                                <i class="fa-sharp fa-solid fa-user-shield fa-2xl"></i>
                                <i class="fa-solid fa-people-roof fa-2xl"></i>
                                <i class="phone fa-sharp fa-solid fa-mobile fa-2xl"></i>

                            </div>
                            <div className="myList">
                                <ul>
                                    <li>
                                        <span className='pri-text'>Always safe</span>
                                        <p className='sec-text'>All rentals include insurance and 24/7 assistance</p>
                                    </li>
                                    <li>
                                        <span className='pri-text'>Accomodation for every moment</span>
                                        <p className='sec-text'>All rentals include insurance and 24/7 assistance</p>
                                    </li>
                                    <li>
                                        <span className='pri-text'>use our app</span>
                                        <p className='sec-text'>Best app you can find anywhere</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button>Find a Rental</button>
                            <button id='white-btn'>Share your property</button>
                        </div>
                    </div>
                    <div className="leftContainer">
                        <div className="card-ok">
                            <img src={card} alt="cardHere" className='card' />
                            <div className="text-area">
                                <p className='pri-a-text'>this is  primary text</p>
                                <p className='sec-a-text'>this is secondary text</p>
                            </div>
                        </div>
                        <div className="card-ok">
                            <img src={card} alt="cardHere" className='card' />
                            <div className="text-area">
                                <p className='pri-a-text'>this is  primary text</p>
                                <p className='sec-a-text'>this is secondary text</p>
                            </div>
                        </div>
                        <div className="card-ok">
                            <img src={card} alt="cardHere" className='card' />
                            <div className="text-area">
                                <p className='pri-a-text'>this is  primary text</p>
                                <p className='sec-a-text'>this is secondary text</p>
                            </div>
                        </div>
                        <div className="card-ok">
                            <img src={card} alt="cardHere" className='card' />
                            <div className="text-area">
                                <p className='pri-a-text'>this is  primary text</p>
                                <p className='sec-a-text'>this is secondary text</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blue-pic">
                    <img src={blue} alt="blue" />
                </div>
                <div className="blue-text">
                    <div className="sec-blue-text">
                        <p className='selmon-text'>Help us protect you from scams</p>
                        <p className='sharukh-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, molestias quas? Corporis, aliquid? Cumque, provident possimus natus architecto atque inventore perspiciatis quo recusandae eaque tenetur necessitatibus, amet, quas dicta rem?</p>
                    </div>
                    <div className="btn">
                        <button>More Information</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default MidPage

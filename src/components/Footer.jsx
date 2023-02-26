import React from 'react'
import './footer.css'
const Footer = () => {
    const card_bot = require('../imges/card.jpg');
    const apple = require('../imges/apple.jpg');
    const google = require('../imges/google.png');
    return (
        <>
            <div className="container-1">
                <div className="left-side-container">
                    <h4>Unleash the power of possibility and own your rental empire with GotArent as your trusty sidekick - Reap the rewards and Benifits Today!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, veritatis?</p>
                    <button>Download App</button>
                </div>
                <div className="right-side-container">
                    <div className="card" >
                        <p className='bold'>Reesav Gupta</p>
                        <p className='light'>guptareesav16@gmail.com</p>
                    </div>
                    <div className="card" >
                        <p className='bold'>Reesav Gupta</p>
                        <p className='light'>guptareesav16@gmail.com</p>
                    </div>
                    <div className="card">
                        <p className='bold'>Reesav Gupta</p>
                        <p className='light'>guptareesav16@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="container-2">
                <div className="bottom-top">
                    <div className="bot-text">
                        <h5>Room Sharing With GotArent</h5>
                    </div>
                    <div className="img-group">
                        <div className="img">
                            <img src={card_bot} alt="this is a room" />
                        </div>
                        <div className="img">
                            <img src={card_bot} alt="this is a room" />
                        </div>
                        <div className="img">
                            <img src={card_bot} alt="this is a room" />
                        </div>
                    </div>
                    <div className="button-group">
                        <button>Discover Your Stay</button>
                        <hr />
                    </div>
                </div>
                <div className="bottom-bot">
                    <div className="f-text-area">
                        <div className="f-blue-text">
                            <p>buissness</p>
                        </div>
                        <div className="f-texts">
                            <ul className="f-list">
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="f-text-area">
                        <div className="f-blue-text">
                            <p>buissness</p>
                        </div>
                        <div className="f-texts">
                            <ul className="f-list">
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="f-text-area">
                        <div className="f-blue-text">
                            <p>buissness</p>
                        </div>
                        <div className="f-texts">
                            <ul className="f-list">
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="f-text-area">
                        <div className="f-blue-text">
                            <p>buissness</p>
                        </div>
                        <div className="f-texts">
                            <ul className="f-list">
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="f-text-area">
                        <div className="f-blue-text">
                            <p>buissness</p>
                        </div>
                        <div className="f-texts">
                            <ul className="f-list">
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                                <li>this is</li>
                            </ul>
                        </div>                        
                    </div>
                </div>
                <div className="f-icons">
                    <div className="copyright f-icons-divs">
                        <p> &#169;2023 gotArent. All rights reserved. </p>
                    </div>
                    <div className="f-social f-icons-divs">
                        <div className="f-facebook">
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </div>
                        <div className="f-twitter">
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </div>
                        <div className="f-insta">
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </div>
                    </div>
                    <div className="f-google f-icons-divs">
                        <div className="f-apple">
                            <img className = "f-imgs" src={apple} alt="apple" />
                        </div>
                        <div className="f-google-img">
                            <img className = "f-imgs" src={google} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

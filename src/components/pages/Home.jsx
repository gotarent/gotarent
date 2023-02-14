import React from "react";
import "./Home.css";
import Navbar from "./Navbar"
const gtk = require("../static/Picture@1x.png");
const wave = require("../static/drawnline1@1x.png");
const rectangle = require("../static/rectangular shape@1x.png");
const card = require("../imges/card.jpg")
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="first-cont">
          <div className="m-text">
            <h1>Discover your next cozy </h1>
            <h1> retreat, now on our platform.</h1>
          </div>
          <div className="img-group">
            <div className="m-img">
              <img src={gtk} alt="gtk image" />
            </div>
            <div className="s-img">
              <img src={rectangle} alt="" />
            </div>
            <div className="wave">
              <img src={wave} alt="" />
            </div>
          </div>
          <div className="red-bg">
            <div className="red-content">
              <p className="bold">Where do you need a rental?</p>
              <p className="gold">chisopani</p>
            </div>
            <div className="red-content2">
              <p className="bold">From</p>
              <p className="gold">18 march 14:00</p>
            </div>
            <div className="red-content3">
              <p className="bold">where</p>
              <p className="gold">20 march 21:30</p>
            </div>
            <div className="blue-bg">
              <p className="bold">serch rentel</p>
            </div>
          </div>
          <div className="s-text">
            <p className="bolder">More effecient rental system is possible.</p>
            <p>Our rental accomodation online system provides a platform that simplifies</p>
          </div>
        </div>
        <div className="second-cont">
          <div className="left">
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
            <div className="btn-group">
              <button id="red-btn">Find a Rental</button>
              <button id="white-btn">Share your property</button>
            </div>
          </div>
          <div className="right">
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
      </div>
      {/*<div className="body">
          <div className="m-b">
            <div className="img-gtk">
              <img src={gtk} alt="gangtok"></img>
            </div>
            <div className="rect">
              <img src={rectangle} alt="" />
            </div>
            <div className="img-wave">
              <img src={wave} alt="wave" />
            </div>

            <div className="d-f-bod">
              <div className="text">
                <h1>Discover your next cozy </h1>
                <h1> retreat, now on our platform.</h1>
              </div>
              <div className="r-bg d-f-row">
                <div className="i-t">  
                  <div className="m-text">
                    
                    <p className="b-text">
                     
                      Where do you need a rental?
                      <br />
                    </p>
                    <p className="col-grey">chisopani</p>
                  </div>


                  <div className="m-text">
                    <p className="b-text">From</p>
                    <p className="col-grey">
                      {date} {time}
                    </p>
                  </div>

                  <div className="m-text">
                    <p className="b-text">
                      Where
                    </p>
                    <p className="col-grey"> 20 mar 21:30</p>
                  </div>

                </div>
                <div className="blu-bg">
                  <p className="text-padding b-text">Search Rental</p>
                </div>
              </div>
              <div className="t-rs">
                <p className="b-text">More efficient Rental System is possible.</p>
                <p>
                  Our rental accomodation online system provides a platform thst
                  simplifies
                  <br />
                </p>
              </div>
            </div>
          </div>
          <Mid/>
          <div className="third">
            <div className="text-GAR">
              <h1>Your next Accomodation with GotArent</h1>
            </div>
            <div className="d-f-text">
              <div className="left">
                <h2> Lorem, ipsum dolor Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid autem veritatis voluptates magni, pariatur reiciendis earum cum quos in quisquam! Officiis natus consequuntur aut quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum illo iste. Illum, quas tempore, harum recusandae in, modi nostrum deleniti et dolores consequatur facere odio molestiae vero eos. Eum similique ratione quia aperiam sed tempora ipsum itaque optio voluptates.</p>
              </div>
              <div className="middle">
                <h2> Lorem, ipsum dolor Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid autem veritatis voluptates magni, pariatur reiciendis earum cum quos in quisquam! Officiis natus consequuntur aut quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatum assumenda tempora eaque molestias ullam! Corporis culpa, doloremque quibusdam quos et alias labore voluptate consequuntur, molestiae, temporibus aliquam eligendi molestias? Quisquam natus officiis voluptatibus libero, deserunt voluptatum illum vero sed!</p>
              </div>
              <div className="right">
                <h2> Lorem, ipsum dolor Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid autem veritatis voluptates magni, pariatur reiciendis earum cum quos in quisquam! Officiis natus consequuntur aut quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatum assumenda tempora eaque molestias ullam! Corporis culpa, doloremque quibusdam quos et alias labore voluptate consequuntur, molestiae, temporibus aliquam eligendi molestias? Quisquam natus officiis voluptatibus libero, deserunt voluptatum illum vero sed!</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/> */}
    </>
  );
};

export default Home;

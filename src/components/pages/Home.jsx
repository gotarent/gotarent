import React from "react";
import "./Home.css";
import Navbar from "./Navbar"
// import Footer from "../pages/footer"
const gtk = require("../static/Picture@1x.png");
const wave = require("../static/drawnline1@1x.png");
const rwave = require("../static/r-wave.jpg");
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
              <button id="red-btn" type="submit">Find a Rental</button>
              <button id="white-btn" type="submit">Share your property</button>
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
        <div className="blue">
          <div className="b-left">
            <p className="boldtext">
              Help us protect you from scams
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eos omnis, accusantium nesciunt enim explicabo eius nobis et nulla labore laudantium repellat quo quos aliquam rerum blanditiis mollitia neque sapiente asperiores! Porro accusamus debitis explicabo incidunt nemo quod sapiente. Nostrum in, itaque doloremque architecto dolorum qui exercitationem possimus eius! Beatae?</p>
          </div>
          <div className="b-right">
            <button className="butn">More Information</button>
          </div>
        </div>
        <div className="r-wave">
          <img src={rwave} alt="" />
        </div>
      </div>
      <div className="third">
        <div className="t-text">
          <p className="t-bold">your next accomodation with got a rent</p>
          <div className="t-left">
            <div className="t-textl"><h3>Easy Booking and managment</h3><p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nobis alias quisquam harum aliquam ratione, debitis pariatur excepturi sapiente possimus blanditiis esse, officiis, laudantium eaque. Laborum neque quos odit. Corporis exercitationem accusamus beatae facere totam quas iure magni quasi. Temporibus expedita ut sed optio nisi, provident voluptatem iusto consequuntur aliquam.</p></div>
            <div className="t-textr">
            <h3>
              increased efficency
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in deserunt nobis inventore recusandae nulla sed, culpa exercitationem, esse quis voluptate quidem dolore repellat numquam modi rerum laboriosam! Voluptatem, molestiae? Repellendus incidunt inventore labore, eos a odio exercitationem, ducimus error veniam minima provident similique modi laboriosam, velit tempore quae autem.
              </p>
            </div>
          </div>
            <div className="tl-btn">
              <button type="button">look for</button>
            </div>
        </div>
          <div className="t-right">
            <div className="tr-text">
              <h3>improved costumer experience</h3>
              <p className="tr-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt amet rerum facere inventore, aspernatur dolorum veniam repellat unde iste quibusdam. Eligendi provident aliquam modi eius eveniet id aperiam quos? Neque enim molestias modi nam, architecto ullam, quae minus ipsa provident vel at veritatis, recusandae reprehenderit non ex et autem.</p>
            </div>
          </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Home;

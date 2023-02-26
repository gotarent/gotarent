import React from "react";
import "./Home.css";
import Footer from "../Footer"
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.init({
  delay:10,
  duration:900,
})
// import Footer from "../pages/footer"
const gtk = require("../static/Picture@1x.png");
const wave = require("../static/drawnline1@1x.png");
const rwave = require("../static/r-wave.jpg");
const rectangle = require("../static/rectangular shape@1x.png");
const cardp = require("../imges/card.jpg")
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home" data-aos="slide up">
        <div className="first-cont" >
          <div className="m-text" >
            <h1>Discover your next cozy </h1>
            <h1> retreat, now on our platform.</h1>
          </div>
          <div className="img-group-h">
            <div className="m-img">
              <img src={gtk} alt="gtk image" />
            </div>
            <div className="s-img">
              <img src={rectangle} alt="" />
            </div>
            {/* <div className="wave">
              <img src={wave} alt="" />
            </div> */}
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
        <div className="second-cont" data-aos="slide-up">
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
              <img src={cardp} alt="cardHere" className='cardp' />
              <div className="text-area">
                <p className='pri-a-text'>this is  primary text</p>
                <p className='sec-a-text'>this is secondary text</p>
              </div>
            </div>
            <div className="card-ok">
              <img src={cardp} alt="cardHere" className='cardp' />
              <div className="text-area">
                <p className='pri-a-text'>this is  primary text</p>
                <p className='sec-a-text'>this is secondary text</p>
              </div>
            </div>
            <div className="card-ok">
              <img src={cardp} alt="cardHere" className='cardp' />
              <div className="text-area">
                <p className='pri-a-text'>this is  primary text</p>
                <p className='sec-a-text'>this is secondary text</p>
              </div>
            </div>
            <div className="card-ok">
              <img src={cardp} alt="cardHere" className='cardp' />
              <div className="text-area">
                <p className='pri-a-text'>this is  primary text</p>
                <p className='sec-a-text'>this is secondary text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blue" data-aos="slide-up">
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
      


      <div className="third" data-aos="slide-up">
        <div className="third-container-heading">
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
        </div>
        <div className="three-containers">
          <div className="t-container ">
            <h5 className="t-heading">aifiafajfo</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, earum reiciendis provident doloribus molestias nostrum consequatur incidunt, ullam illo, vero culpa ab maiores natus! Minima sunt labore itaque, debitis at minus quis ullam ut architecto ipsa aspernatur obcaecati eum repudiandae, sequi voluptatibus ea molestiae ipsam nemo. Voluptatum optio ratione reiciendis?</div>
          <div className="t-container ">
            <h5 className="t-heading">aifiafajfo</h5>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius tenetur, nihil iusto voluptates error enim vitae! Quas excepturi quisquam ad nemo eveniet sequi odio at id mollitia iusto, beatae consequuntur error animi sapiente soluta. Officia, repudiandae, adipisci, ad earum ducimus est veritatis odit cumque fugit dolorum iure eos neque?</div>
          <div className="t-container ">
            <h5 className="t-heading">aifiafajfo</h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aperiam voluptate magnam fuga reiciendis. Ex libero voluptatibus, porro laudantium aliquam tempora accusantium corrupti, necessitatibus sequi deleniti molestias earum nam? Quod accusantium provident, possimus dolores, unde itaque repudiandae deleniti totam, voluptatibus vero suscipit nisi deserunt tenetur tempore enim dolore iure magni!
            lorem50</div>
        </div>
        <div className="t-button-div">
          <button>go search</button>
        </div>
      <Footer/> 
      </div>

    </>
  );
};

export default Home;

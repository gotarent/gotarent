import React from "react";
import "./Navbar";
import "./Home.css";
import Mid from "./MidPage.jsx"
import "./home@media.css";
const gtk = require("../static/Picture@1x.png");
const wave = require("../static/drawnline1@1x.png");
const rectangle = require("../static/rectangular shape@1x.png");
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const Home = () => {
  return (
    <>
      <div className="body">
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
                <div className="i-t">  {/* i-t: text left*/}
                  <div className="m-text">
                    {/* m-text: main text*/}
                    <p className="b-text">
                      {/*b-text: bold text  */}
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
    </>
  );
};

export default Home;

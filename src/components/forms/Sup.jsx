import React from "react";
import "../pages/signup.css";
const bluebg = require('../static/signup.png')

const Sup = () => {
  return (
    <>
      <div className="container">
        <div className="sec-container">
          <div className="img">
            <div className="left">
              <img src={bluebg} alt="login" />
            </div>
            {/* <div className="right">
                    <img src={logo} alt="logo" />
                </div> */}
          </div>
          <div className="head-text">
            <p>
              Find your next home with 
              just a few clicks, start your journey now!
            </p>
          </div>
          <div className="form-group">
            <form action="/otp">
              <fieldset>
                <legend>E-mail</legend>
                <input
                  type="email"
                  name="email"
                  placeholder="contact@gotarent.com"
                />
              </fieldset>
              <fieldset>
                <legend>Password</legend>
                <input type="password" name="password" placeholder="********" />
              </fieldset>
              <fieldset>
                <legend>Confirm Password</legend>
                <input type="password" name="password" placeholder="********" />
              </fieldset>
              <div className="btn">
                <button>Sign-up</button>
              </div>
            </form>
          </div>
          <div className="label">
            <input type="radio"/>
            <label>I agree all the terms and conditions</label>
          </div>
          <div className="bottom">
            <div className="para">
              <p>Already A User ?</p>
            </div>
            <div className="link-signup">
              <a href="/">Log-in</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sup;

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
          <div className="si-form-group">
            <form action="/otp">
              <fieldset>
                <legend className="em">E-mail</legend>
                <input
                  type="email"
                  name="email"
                  placeholder="contact@gotarent.com" required
                />
              </fieldset>
              <fieldset>
                <legend className="em">Password</legend>
                <input type="password" name="password" placeholder="************************" required />
              </fieldset>
              <fieldset>
                <legend id="con">Confirm Password</legend>
                <input type="password" name="password" placeholder="************************" required/>
              </fieldset>
              <div className="label">
            <input type="checkbox" required/>
            <label>I agree to all the <a href="/terms" className="a">terms and conditions.</a> </label>
            {/* <div className="tc">
              <ul><li><a href="/termsandcondition">terms and condition</a></li></ul>
            </div> */}
          </div>
              <div className="btn">
                <button type="submit">Sign-up</button>
              </div>
            </form>
          </div>
          
          <div className="bottom">
            <div className="para">
              <p>Already A User ?</p>
            </div>
            <div className="link-signup">
              <a href="/login">Log-in</a>
            </div>
          </div>
        </div>

        <p className="rights ">All rights resreved 2022-2023 &#169; gotarent</p>
      </div>
    </>
  );
};

export default Sup;

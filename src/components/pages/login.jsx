import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
// const logo = require('../static/logo.png')
const bluebg = require('../static/1.png')
const login = () => {
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
                        <p><span>"Welcome back!</span> Let's find your next home away from home!"</p>
                    </div>
                    <div className="form-group">
                        <form action="/main">
                            <fieldset>
                                <legend>E-mail</legend>
                                <input type="email" name="email" placeholder='contact@gotarent.com' required />
                            </fieldset>
                            <fieldset>
                                <legend>Password</legend>
                                <input type="password" name="password" placeholder='********' required/>
                            </fieldset>
                            <div className="btn">
                                <button>Login</button>
                            </div>
                            <div className="forgotpassword">
                                <ul><li><a href="/email">Forgot password</a></li></ul>
                            </div>
                        </form>
                    </div>
                    <div className="bottom">
                        <div className="para">
                            <p>Not a user yet!</p>
                        </div>
                        <div className="link-signup">
                            <a href="/signup">Signup</a>
                        </div>
                    </div>
                    <p className="rights-l">All rights resreved 2022-2023 &#169;<a href="/" className='a-l'>gotarent</a></p>
                </div>
            </div>
        </>
    )
}

export default login

import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
// const logo = require('../static/logo.png')
const bluebg = require('../static/login.png')
const Login = () => {
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
                        <form action="/otp">
                            <fieldset>
                                <legend>E-mail</legend>
                                <input type="email" name="email" placeholder='contact@gotarent.com' />
                            </fieldset>
                            <fieldset>
                                <legend>Password</legend>
                                <input type="password" name="password" placeholder='********' />
                            </fieldset>
                            <div className="btn">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="bottom">
                        <div className="para">
                            <p>Not a user yet!</p>
                        </div>
                        <div className="link-signup">
                            <a href="/">Signup</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

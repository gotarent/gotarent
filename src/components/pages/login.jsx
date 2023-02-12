import React from 'react'
import "./login.css"
const logo = require('../static/logo.png')
const bluebg = require('../static/login.png')
const login = () => {
    return (
        <div className='m-login'>
            <div className="secondary">
                <div className="blue">
                    <img src={bluebg} alt="" id='bluebg' />
                </div>
                <div className="log">
                <img src={logo} alt="" />
                </div>
                <div className="text">
                    <p>"welcome back, lets find your next home away from home!"</p>
                </div>
                <div className="form">
                    <form action="/" method="">
                        <fieldset>
                            <legend className='legend'>Email</legend>
                            <input type="email" name="#" placeholder='contact@gotarent.in' />
                        </fieldset>
                        <fieldset>
                            <legend className='legend'>Password</legend>
                            <input type="password" name="#" id="password" placeholder='******' />
                        </fieldset>
                        <div className="btn">
                            <button>Login</button>
                        </div>
                    </form>
                </div>
                <div className="anc">
                    <p>Not a user yet!</p>
                    <a href="/signup">signup here</a>
                </div>
            </div>
        </div>
    )
}

export default login

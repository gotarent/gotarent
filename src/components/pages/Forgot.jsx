import React from 'react'
import "./forgot.css"
const limg = require("../static/logo.png")
const Forgot = () => {
    return (
        <div className='for-main'>
            <div className="for-card">
                <img src={limg} alt="" />
                <div className="for-formgroup">
                    <form action="/home" method="get">
                        <fieldset className='for-field'>
                            <legend>new password</legend>
                            <input type="password"placeholder=' enter new password'required />
                        </fieldset>
                        <fieldset className='for-field'>
                            <legend>confirm password</legend>
                            <input type="password" placeholder='confirm password' required/>
                        </fieldset>
                        <button type="submit" id='submit'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot

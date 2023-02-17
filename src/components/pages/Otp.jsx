import React from 'react'
import "./otp.css"
const ot = require("../static/otp.png")
const Otp = () => {
    return (
        <>
            <div className='o-main' >
                <div className="o-card">
                    <img src={ot} alt="" />
                    <div className="o-from-group">
                        <p className=''></p>
                        <form action="/forgot" className='o-form'>
                        <legend> Enter your otp</legend>
                            <input type="text" placeholder='OTP required'/>
                            <div className="resend">
                                <ul><li> <a href="">resend otp?</a></li></ul>
                            </div>
                            <div className="o-btn"><button type='submit'>submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp

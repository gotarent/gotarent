import React from 'react'
import "./otp.css"
const limg = require("../static/logo.png")
const Otp = () => {
    return (
        <>
            <div className='o-main' >
                <div className="o-card">
                    <img src={limg} alt="" />
                    <div className="o-from-group">
                        <p className=''></p>
                        <form action="/" className='o-form'>
                        <fieldset>
                        <legend>Enter your otp</legend>
                            <input type="number" placeholder='otp'/>
                            </fieldset>
                            <div className="resend">
                                <ul><li> <a href="">resend otp?</a></li></ul>
                            </div>
                            <div className="o-btn"><button>submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp

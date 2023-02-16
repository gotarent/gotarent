import React from 'react'
import "../pages/email.css"
const logo = require("../imges/logo.png")
const Email = () => {
    return (
        <>
            <div className='e-container'>
                <div className="e-card">
                    <div className="e-Img">
                 
                    <img src= {logo} alt="img here" className='logo'></img>    
                 
                </div>
                <p>Enter your email</p>
                    <form action="/otp">
                        <fieldset>
                            <input className='e-input'
                                type="email"
                                name="email"
                                placeholder="contact@gotarent.com" required
                            />
                        </fieldset>
                        <div className="e-btn">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Email
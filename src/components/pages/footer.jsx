import React from 'react'
import './footer.css';
const Room = require('../static/room.jpg')
const footer = () => {
  return (
    <div className="f-main">
    <div className='footer'>
      <div className="text">
        <h1>Room sharing with gotarent</h1>
      </div>
      <div className="pic">
        <img src={Room} alt=" room images" />
        <img src={Room} alt=" room images" />
        <img src={Room} alt=" room images" />
      </div>
      <div className="butn">

      <button>Discover a room</button>
      </div>
      {/* <div className="hr">
        <hr/>
      </div>*/}
    </div> 
    </div>
  )
}

export default footer

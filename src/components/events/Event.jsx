import React from 'react'
import './event.css'


const Event = ({ imgUrl, date, text }) => (
    <div className="gpt3__event section__padding" id="home">
        <div className="gpt3__event-content">
       <h1 className="gradient__text">Our next big event {text} on {date}. You all are cordially invicted </h1>
        <p></p>
        <p></p>
        <p></p>
      </div>

    <div className="gpt3__event-image">
          <img src={imgUrl} />
        </div>
      </div>
  );
  

export default Event

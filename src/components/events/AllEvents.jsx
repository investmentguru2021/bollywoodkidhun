import React from 'react';
import Event from './Event';
import {Aug2022,Holi2022,Nov2022,independencedayWishes} from './imports';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './upcomingevent.css';

const AllEvents = () => {
  return (
    <div>
     <div className="gpt3__event section__padding" id="home">
        <div className="gpt3__event-content">
       <h1 className="gradient__text">Our Events</h1>
      </div>
    </div>
    <Carousel useKeyboardArrows>
     <div className="gpt3__event section__padding" id="home">
        <div className="gpt3__event-content">
       <h1 className="gradient__text">We recently completed our event Retro Reels that was a huge success, with songs featuring from the golden era of the bollywood </h1>
        <p></p>
        <p></p>
        <p></p>
      </div>

    <div className="gpt3__event-image">
          <img src={Nov2022} />
        </div>
      </div>

    <div className="gpt3__event section__padding" id="home">
        <div className="gpt3__event-content">
        <h1 className="gradient__text">Yet another successful event as a tribute to the Greatest Singer of the bollywood Kishor Da on his Birth Anniversary </h1>
        <p></p>
        <p></p>
        <p></p>
      </div>

    <div className="gpt3__event-image">
          <img src={Aug2022} />
        </div>
      </div>

     <div className="gpt3__event section__padding" id="home">
        <div className="gpt3__event-content">
        <h1 className="gradient__text">We completed our event on the occassion of Holi 2022  </h1>
        <p></p>
        <p></p>
        <p></p>
      </div>

    <div className="gpt3__event-image">
          <img src={Holi2022} />
        </div>
      </div>
    </Carousel>
</div>
  )
}

export default AllEvents

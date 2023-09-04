import React from 'react';
import Event from './Event';
import {upcomingeventnov2022,independencedayWishes} from './imports';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './upcomingevent.css';

const UpcomingEvent = () => {
  return (
    <Carousel useKeyboardArrows>
      <div>
      <img
          src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=630&h=354"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=630&h=354"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=630&h=354"
          alt=""
        />
    </div>
    </Carousel>
  )
}

export default UpcomingEvent

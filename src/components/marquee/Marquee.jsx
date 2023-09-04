import React from 'react';
import Marquee from "react-fast-marquee";
import './marquee.css';
import star from '../../assets/star.png';
import {chandrayaan,aditya,g20} from './imports';
import {    faYoutube,    faFacebook,    faTwitter,    faInstagram  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const marquee = () => {
  return (
    <div className='gpt3__marquee-component'>
      <Marquee pauseOnHover="true" speed="40">

          <div className='gpt3__marquee-component-content'>
          <img src={g20} height="50" alt="Princeton"/>
          <div className='gpt3__marquee-component-text'>
          Best wishes for the New Delhi G20 summit</div>
          <img src={g20} height="50" alt="Princeton"/>
          </div>

          <div className='gpt3__marquee-component-content'>
          <img src={chandrayaan} height="50" alt="Princeton"/>
          <div className='gpt3__marquee-component-text'>
           Congratulations India : Chandrayaan 3 mission and Aditya L1 mission</div>
          <img src={aditya} height="50" alt="Princeton"/>
          </div>
          
        </Marquee>
    </div>
  )
}

export default marquee

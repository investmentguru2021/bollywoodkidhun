import React from 'react';
import Marquee from "react-fast-marquee";
import './marquee.css';
import star from '../../assets/star.png';
import {chandrayaan,aditya,g20,worldcup2023, happydiwali,happyholidays} from './imports';
import {    faYoutube,    faFacebook,    faTwitter,    faInstagram  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const marquee = () => {
  return (
    <div className='gpt3__marquee-component'>
      <Marquee pauseOnHover="true" speed="40">

          <div className='gpt3__marquee-component-content'>
          <img src={happyholidays} height="50" alt="Princeton"/>
          <div className='gpt3__marquee-component-text'>
             Wishing everyone warm wishes for the holidays</div>
          <img src={happyholidays} height="50" alt="Princeton"/>
          </div>
          
        </Marquee>
    </div>
  )
}


export default marquee

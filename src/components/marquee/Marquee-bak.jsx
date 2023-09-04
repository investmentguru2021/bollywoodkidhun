import React from 'react';
import Marquee from "react-fast-marquee";
import './marquee.css';
import star from '../../assets/star.png';
import {independenceday,independenceday1,engine,enginegif,enginegif2,merrychristmas} from './imports';
import {    faYoutube,    faFacebook,    faTwitter,    faInstagram  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const marquee = () => {
  return (
    <div className='gpt3__marquee-component'>
      <Marquee pauseOnHover="true" speed="60">
          <img src={merrychristmas} height="70" alt="Princeton"/>
          <div className='gpt3__marquee-component-text'>
            For latest videos and updates from Bollywood Ki Dhun please visit our YouTube channel:
          </div>
          <a href="https://www.youtube.com/channel/UCEbcxPJh-gZPywiRmfk-PYA" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          <div className='gpt3__marquee-component-text'>
            Facebook Page:
          </div>
          <a href="https://www.facebook.com/BollywoodKiDhun/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <div className='gpt3__marquee-component-text'>
            Instagram:
          </div>
          <a href="https://instagram.com/bollywoodkidhun?igshid=YmMyMTA2M2Y=" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <img src={merrychristmas} height="70" alt="Princeton"/>
          <div className='gpt3__marquee-component-text'>
            we can be reached at bollywoodkidhuncanada@gmail.com or info@bollywoodkidhun.com
          </div>
          
        </Marquee>
    </div>
  )
}

export default marquee

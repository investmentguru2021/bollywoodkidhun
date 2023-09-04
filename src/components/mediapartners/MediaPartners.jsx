import React from 'react'
import "./mediapartners.css";
import {  TheCanadianMedia,  RanglaPunjab,  TheWeeklyVoice,  WeConnects,  MediaPartnersImg} from "./imports";

const MediaPartners = () => {
  return (
    <div className="gpt3__mediapartners" id="mediapartners">
    <h1 className="gradient__text">Media Partners</h1>
      <div className="gpt3__mediapartners-container">
            <img src={MediaPartnersImg} />
      </div> 
    </div>
  )
}

export default MediaPartners;

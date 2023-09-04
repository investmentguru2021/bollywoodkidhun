import React from 'react';
import './teammember.css';


const TeamMember = ({photo, name, title, text }) => {
  return (
    <div className="gpt3__teammember-container">
    <div className="gpt3__teammember-container-titleImg">
        <div className='gpt3__teammember-image'>
        <img src={photo} />
        </div>
        <div className="gpt3__teammember-container-name">
        <div />
        <h1>{name}</h1>
        </div>
        <div className="gpt3__teammember-container-title">
        <div />
        <h1>{title}</h1>
        </div>
    </div>
    <div className="gpt3__teammember-container-text">
      <p>{text}</p>
    </div>
  </div>
  )
};

export default TeamMember;




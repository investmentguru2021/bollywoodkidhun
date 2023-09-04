import React from 'react';
import Event from './Event';
import {Aug2022,Holi2022,Nov2022,independencedayWishes} from './imports';
import './upcomingevent.css';

const UpcomingEvent = () => {
  return (
    <div className='gpt3__upcomingevents section__padding'>
     <div className='gpt3__upcomingevents-container_groupB'>
        <Event imgUrl={Nov2022} date="Aug 04, 2022" text="Kishore Kumar nights"/>
     </div>
    </div>
  )
}

export default UpcomingEvent

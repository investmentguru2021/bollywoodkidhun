import React from 'react';
import bollywoodtalent from '../../assets/bollywoodtalent.jpg';
import bkdbi from '../../assets/bkdbi.jpg'
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
      <h1 className="gradient__text">Mission Statement</h1>
      <p>Our mission is to bring forth new and aspiring musicians and singers in North America</p>
      <p>Conceptualized by Rajan Sharma, a CPA by profession, Bollywood Ki Dhun enables people from the South Asian community residing in North America to showcase their talents. He moved to Canada in December 1981.</p>
      <p>"Music has always had a special place in my heart. However, back in the day, there weren't many platforms and mediums as there are now for people to showcase their talent to the world. Through Bollywood Ki Dhun, I want to encourage people who have an interest in singing or playing musical instruments to pursue their passion and provide them with a stage where they can perform.", says Rajan Sharma, Founder, Bollywood Ki Dhun.</p>
      <p>Our mission is to explore new talent among South Asians, including people from India, Bangladesh, Sri Lanka, Pakistan, Afghanistan, Bhutan, Nepal, and the Maldives. We scout talents by mainly reaching out to organizations and through word-of-mouth promotions.</p>
      
    </div>

  <div className="gpt3__header-image">
        <img src={bkdbi} />
      </div>

      
    </div>
  )
};

export default Header

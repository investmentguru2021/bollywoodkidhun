import React from 'react';
import logo1 from '../../assets/logo-good.jpg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Get in touch with us if you are interested in joining our team as an artist</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Drop us an email @ bollywoodkidhuncanada@gmail.com or info@bollywoodkidhun.com </p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo1} alt="logo" />
        <p>Bollywood Ki Dhun, Markham, Toronto <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>bollywoodkidhuncanada@gmail.com</p>
        <p>info@bollywoodkidhun.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>website developed and maintained by </p>
      <p><a target="_blank" href="https://www.heraldinfotech.com/">Herald Infotech Inc.</a> </p>
    </div>
  </div>
);

export default Footer;

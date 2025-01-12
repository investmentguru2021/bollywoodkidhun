import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import logo1 from '../../assets/logo-good.jpg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo1} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#coreTeam">Core Team</a></p>
          <p><a href="#performances">Performances</a></p>
          <p><a href="#recognitions">Recognitions</a></p>
          <p><a href="#mediapartners">Media Partners</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#coreTeam">Core Team</a></p>
            <p><a href="#performances">Performances</a></p>
            <p><a href="#recognitions">Recognitions</a></p>
            <p><a href="#mediapartners">Media Partners</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

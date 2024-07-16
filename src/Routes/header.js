import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo1 from "../images/logo1.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo1} id="logo" alt="" />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/location">Locations</Link>
      </nav>
      <div className="icons">
        <div id="menubar"></div>
        <Link to="/location">Book an Appointment</Link>
      </div>
    </div>
  );
};

export default Header;
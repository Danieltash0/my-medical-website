import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <img src="/images/logo1.jpg" id="logo" alt="" />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/Location">Locations</Link>
      </nav>
      <div className="icons">
        <div id="menubar"></div>
        <a href="/location">Book an Appointment</a>
      </div>
    </div>
  );
};

export default Header;
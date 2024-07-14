import React from 'react';
import '../../styles/index.css';

const Header = () => {
  return (
    <header className="header">
    <img src="images/logo1.jpg" id="logo" alt=""/>
    <nav className="navbar">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="location.html">Locations</a>
        <a href="contact.html">Contact</a>
    </nav>     
      <div className="icons">
       <div id="menubar"></div>
       <a href="#">Book an Appointment</a>
      </div>
  </header>
  );
};

export default Header;
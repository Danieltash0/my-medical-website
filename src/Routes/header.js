import React from 'react';


const Header = () => {
  return (
    <div className="header">
    <img src="public\images\logo1.jpg" id="logo" alt=""/>
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
  </div>
  );
};

export default Header;
import React from 'react';
import '../../styles/index.css';

const Header = () => {
  return (
    <header className="header">
      <img id="logo" src="path/to/logo.png" alt="Logo" />
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icons">
        <i id="menubar" className="fa fa-bars"></i>
        <a href="#login">Login</a>
      </div>
    </header>
  );
};

export default Header;
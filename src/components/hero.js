import React from 'react';
import '../../styles/index.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Our Website</h1>
      <p>We provide the best services for you.</p>
      <a className="hero-btn" href="#services">Learn More</a>
    </div>
  );
};

export default Hero;
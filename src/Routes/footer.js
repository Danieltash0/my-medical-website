import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import whatsapp from '../images/whatsapp.jpg';
import xlogo from '../images/xlogo.jpg'
import gmail from '../images/gmail.jpg'
import pinterest from '../images/pinterest.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-text'>
      <p>Bridging the gap to better healthcare</p>
      <p> Cure Connect @ 2024</p>
      </div>
    <div className='image-container'>
    <Link to='/'><div className='social-icon'><img src={whatsapp} alt='socials'/></div></Link>
    <Link to='/'><div className='social-icon'><img src={xlogo} alt='socials'/></div></Link>
    <Link to='/'><div className='social-icon'><img src={pinterest} alt='socials'/></div></Link>
    <Link to='/'><div className='social-icon'><img src={gmail}alt='socials' /></div></Link>
    </div>
    </footer>
  );
};

export default Footer;
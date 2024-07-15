import React from 'react';
import './location.css';
import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <div>
    <img src=" images/stethoscope.jpg" id="backg" alt="doctor's stethoscope"/> 
    <body background="images/stethoscope.jpg" className="image1"></body>
    
   <div className="body">
        <div className="grid-container">
            <div className="grid-item"><Link to="/district">Nairobi</Link></div>
            <div className="grid-item"><Link to="/district">Nakuru</Link></div>
            <div className="grid-item"><Link to="/district">Kisumu</Link></div>
            <div className="grid-item"><Link to="/district">Mombasa</Link></div>
            <div className="grid-item"><Link to="/district">Eldoret</Link></div>
            <div className="grid-item"><Link to="/district">Kiambu</Link></div>
        </div>   
  </div>
   <footer>
    <p>Bridging the gap to better healthcare</p>
    <p> Cure Connect 2024</p>
   </footer>
</div>
  )
}

export default Location;
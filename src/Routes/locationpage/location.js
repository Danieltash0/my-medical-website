import React from 'react';
import './location.css';
import { Link } from 'react-router-dom';


const Location = () => {
  
  return (
    <div className='whole'>
  <div className='Title'>
    <h1>Book an Appointment Near You</h1>
    </div>
    
   <div className="body">
        <div className="grid-container">
            <Link to="/district"><div className="grid-item">Nairobi</div></Link>
            <Link to="/district"><div className="grid-item">Nakuru</div></Link>
            <Link to="/district"><div className="grid-item">Kisumu</div></Link>
            <Link to="/district"><div className="grid-item">Mombasa</div></Link>
            <Link to="/district"><div className="grid-item">Eldoret</div></Link>
            <Link to="/district"><div className="grid-item">Kiambu</div></Link>
        </div>   
  </div>
   
</div>
  )
}

export default Location;
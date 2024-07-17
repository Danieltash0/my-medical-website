import React from 'react';
import  './district.css';
import nurse from '../../images/nurse.jpg';
import doc1 from '../../images/doc1.jpg'
import doc7 from '../../images/doc7.jpg'
import doc8 from '../../images/doc8.jpeg'
import { Link } from 'react-router-dom';



const District = () => {
  return (
  
<div className="specialists">
<div className="grid-container">
    <div className="card">
        <img src={doc1} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>Aga Khan Hospital</p> 
            <p> Dermatologist</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={nurse} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>The Union Hospital</p> 
            <p> Physical Therapist</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={nurse} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>District International Hospital</p> 
            <p> Physician</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={nurse} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>St.Peter's Hospital</p> 
            <p> Genetic counselor</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={nurse} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>Johns Hopkins Medical Center</p> 
            <p> Obstetrician-gynecologist</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={nurse} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>Metropolitan Hospital</p> 
            <p> Dietitian</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div> 
    </div>
    <div className="card">
        <img src={doc7} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>The County Clinic</p> 
            <p> Audiologist</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div><div className="card">
        <img src={doc8} alt="nurse" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>The Karen Hospital</p> 
            <p> Occupational Therapist</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
   
</div>
</div>

  )
}

export default District;
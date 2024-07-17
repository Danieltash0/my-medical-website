import React from 'react';
import  './district.css';
import doc1 from '../../images/doc1.jpg';
import doc2 from '../../images/doc2.jpg';
import doc3 from '../../images/doc3.jpg';
import doc4 from '../../images/doc4.jpg';
import doc5 from '../../images/doc5.jpg';
import doc6 from '../../images/doc6.jpg';
import doc7 from '../../images/doc7.jpg';
import doc8 from '../../images/doc8.jpg';
import { Link } from 'react-router-dom';



const District = () => {
  return (
  
<div className="specialists">
<div className="grid-container">
    <div className="card">
        <img src={doc1} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Millicent Jane</b></h3> 
            <p>Aga Khan Hospital</p> 
            <p> Dermatologist</p> 
            <p>Working Hours : 8:00am to 3:00pm</p>
            <p>Available  Monday to Wednesday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={doc2} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Amir Ishaan</b></h3> 
            <p>The Union Hospital</p> 
            <p> Physical Therapist</p> 
            <p>Working Hours : 9:00am to 5:00pm</p>
            <p>Available  Thursday to Sunday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={doc3} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Gwen Mikui</b></h3> 
            <p>District International Hospital</p> 
            <p> Physician</p> 
            <p>Working Hours : 10:00am to 2:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={doc4} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Charles Musimi</b></h3> 
            <p>St.Peter's Hospital</p> 
            <p> Genetic counselor</p> 
            <p>Working Hours : 11:00am to 7:00pm</p>
            <p>Available  Wednesday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={doc6} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Charlene Kaburu</b></h3> 
            <p>Johns Hopkins Medical Center</p> 
            <p> Obstetrician-gynecologist</p> 
            <p>Working Hours : 9:00am to 3:00pm</p>
            <p>Available  Monday, Wednesday & Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
    <div className="card">
        <img src={doc5} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Mark Simuyu</b></h3> 
            <p>Metropolitan Hospital</p> 
            <p> Dietitian</p> 
            <p>Working Hours : 1:00pm to 6:00pm</p>
            <p>Available  Monday to Friday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div> 
    </div>
    <div className="card">
        <img src={doc7} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. Matthew Obed</b></h3> 
            <p>The County Clinic</p> 
            <p> Audiologist</p> 
            <p>Working Hours : 2:00pm to 10:00pm</p>
            <p>Available  Monday to Wednesday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div><div className="card">
        <img src={doc8} alt="doctor" style={{width: '100%'}}/>
        <div className="container">
            <h3><b>Dr. James Butime</b></h3> 
            <p>The Karen Hospital</p> 
            <p> Occupational Therapist</p> 
            <p>Working Hours : 8:00am to 7:00pm</p>
            <p>Available  Saturday & Sunday</p>
            <Link to='/book'><button className="cardbtn">Book</button></Link>
        </div>
    </div>
   
</div>
</div>

  )
}

export default District;
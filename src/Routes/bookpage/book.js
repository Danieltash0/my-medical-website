import React, { useState } from 'react';
import './book.css';

const Book = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && phone && medicalCondition) {
      setAppointmentBooked(true);
    } else {
      alert('Please fill in all the required fields!');
    }
  };

  return (
    <div className="book-container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
<label>
 <div className='form-text'>Name:</div> 
  <input className='form-input'
    type="text"
    value={name}
    onChange={(event) => setName(event.target.value)}
    required/>
</label>
<br />
<label>
  <div className='form-text'>Email:</div>
  <input className='form-input'
    type="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    required/>
</label>
        <br />
<label>
 <div className='form-text'>Phone:</div> 
  <input className='form-input'
    type="tel"
    value={phone}
    onChange={(event) => setPhone(event.target.value)}
    required/>
</label>
        <br />
<label>
 <div className='form-text'>Summary of Medical Issue:</div> 
  <textarea className="form-textarea"
    value={medicalCondition}
    onChange={(event) => setMedicalCondition(event.target.value)}
    required/>
</label>
        <br />

        <button type="submit"><div className='submit-button'>Submit</div></button>

      </form>
      {appointmentBooked && <p>Appointment Booked Successfully!</p>}
    </div>
  );
};

export default Book;

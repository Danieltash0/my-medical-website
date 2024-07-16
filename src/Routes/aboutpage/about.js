import React from 'react';
import './about.css';
import missionpic from '../../images/missionpic.jpg';
import aboutus from '../../images/aboutus.jpeg';
import HomePageImage from "../../images/homepage.jpg";

const AboutUs = () => {
  return (
    <div>
      <section className="outside-grid">
        <h1>finding the Right Specialist, Simplified</h1>
        <p>We connect you to a network of trusted healthcare professionals, making it easier to get the care you
          deserve.</p>
      </section>

      <div className="grid">
        <div className="gridRow">
          <img src={missionpic} alt="Mission"/>
            <div className="body">
              <div className="about-item">
                <h2>Our Mission</h2>
                <p>Our mission is to bridge the gap between patients and healthcare providers by offering a
                  seamless and
                  user-friendly platform that simplifies the process of finding and booking medical
                  appointments.</p>
              </div>
            </div>
          </div>

        <div className="gridRow">
          <div className="body">
            <div className="about-item">
              <h2>Our Vision</h2>
              <p>Our vision is to create a world where healthcare is accessible, efficient, and
                patient-centered,
                ensuring everyone gets the care they need when they need it.</p>
            </div>
          </div>
          <img src={aboutus} alt="our-vision"/>
          </div>
        <div className="gridRow">
          <img src={HomePageImage} alt="Service 1"/>
            <div className="body">
              <div className="about-item">
                <h2>Why Choose Us</h2>
                <p><b>Curated Network of Specialists:</b> We partner with qualified and experienced professionals across various fields.</p>
                <p><b>Seamless Search:</b> Find the right specialist based on location, insurance, and specific needs.</p>
                <p><b>Simplified Appointment Booking:</b> Schedule appointments directly through our platform</p>
              
            </div>
          </div>
      </div>
 </div>
 
 <div className="outside-grid">
        <h1>How it Works for Patients</h1>
        <p>Our platform provides an easy-to-use interface where patients can search for specialists,
          read
          reviews, and book appointments online. Our dedicated customer service team is always ready
          to assist
          you with any inquiries.</p>
      </div>

</div>

  );
};

export default AboutUs;
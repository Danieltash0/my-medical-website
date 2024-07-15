import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div>
    <header className="header">
        <img src="images/logo1.jpg" alt="Cure Connect Logo"/>
        <nav className="navbar">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="location.html">Locations</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>


    <h2>Our Services</h2>
    <section className="section services">

        <div className="service-item"> <img src="images/service1.jpg" alt="Service 1"/>
            <div className="body">
                <h3>Consultation</h3>
                <p>Schedule appointments with our experienced doctors and specialists for personalized medical advice
                    and treatment plans.</p>
            </div>
        </div>

        <div className="service-item"><img src="images/service2.jpg" alt="Service 2"/>
            <div className="body">
                <h3>Radiology</h3>
                <p>Access advanced imaging services like X-rays, ultrasounds, and MRIs for accurate diagnosis and
                    monitoring of health conditions.</p>
            </div>
        </div>

        <div className="service-item"><img src="images/service3.jpg" alt="Service 3"/>
            <div className="body">
                <h3>Online Appointments</h3>
                <p>Book appointments conveniently through our online platform, eliminating the need for phone calls and
                    saving you valuable time.</p>
            </div>
        </div>

        <div className="service-item"><img src="images/service4.jpg" alt="Service 4"/>
            <div className="body">
                <h3>Laboratory results</h3>
                <p>Retrieve your lab test results securely and easily through our online portal, allowing you to monitor
                    your health indicators.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>Bridging the gap to better healthcare</p>
        <p>Cure Connect &copy; 2024</p>
    </footer>
</div>
  )
}

export default Services;
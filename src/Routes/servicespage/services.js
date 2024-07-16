import React from 'react';
import './services.css';
import Service1 from "../../images/service1.jpg";
import Service2 from "../../images/service2.jpg";
import Service3 from "../../images/service3.jpg";
import Service4 from "../../images/service4.jpg";

const Services = () => {
  return (
    <div>
 <div className='Title'>
    <h1>Our Services</h1>
    </div>
    <section className="section services">

        <div className="service-item"> <img src={Service1} alt="Service 1"/>
            <div className="body">
                <h3>Consultation</h3>
                <p>Schedule appointments with our experienced doctors and specialists for personalized medical advice
                    and treatment plans.</p>
            </div>
        </div>

        <div className="service-item"><img src={Service2} alt="Service 2"/>
            <div className="body">
                <h3>Radiology</h3>
                <p>Access advanced imaging services like X-rays, ultrasounds, and MRIs for accurate diagnosis and
                    monitoring of health conditions.</p>
            </div>
        </div>

        <div className="service-item"><img src={Service3} alt="Service 3"/>
            <div className="body">
                <h3>Online Appointments</h3>
                <p>Book appointments conveniently through our online platform, eliminating the need for phone calls and
                    saving you valuable time.</p>
            </div>
        </div>

        <div className="service-item"><img src={Service4} alt="Service 4"/>
            <div className="body">
                <h3>Laboratory results</h3>
                <p>Retrieve your lab test results securely and easily through our online portal, allowing you to monitor
                    your health indicators.</p>
            </div>
        </div>
    </section>

    
</div>
  )
}

export default Services;
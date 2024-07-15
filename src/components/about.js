import React from 'react';


const AboutUs = () => {
  return (
    <div>
      <section class="about-hero">
        <h1>Find the Right Specialist, Simplified</h1>
        <p>We connect you to a network of trusted healthcare professionals, making it easier to get the care you
          deserve.</p>
      </section>

      <div class="grid">
        <div class="gridRow">
          <img src="images/images.jpg" alt="Mission"/>
            <div class="body">
              <section class="about-item">
                <h2>Our Mission</h2>
                <p>Our mission is to bridge the gap between patients and healthcare providers by offering a
                  seamless and
                  user-friendly platform that simplifies the process of finding and booking medical
                  appointments.</p>
              </section>
            </div>
          </div>

        <div class="gridRow">
          <div class="body">
            <div class="about-item">
              <h2>Our Vision</h2>
              <p>Our vision is to create a world where healthcare is accessible, efficient, and
                patient-centered,
                ensuring everyone gets the care they need when they need it.</p>
            </div>
          </div>
          <img src="images/aboutus.jpeg" alt="our-vision"/>
          </div>
        <div class="gridRow">
          <img src="images/homepage.jpg" alt="Service 1"/>
            <div class="body">
              <div class="about-item">
                <h2>Why Choose Us?</h2>
                <p>Curated Network of Specialists: We partner with qualified and experienced professionals
                  across
                  various medical fields.</p>
                <p>Seamless Search: Find the right specialist based on location, insurance, and specific
                  healthcare
                  needs.</p>
                <p>Simplified Appointment Booking: Schedule appointments directly through our platform with
                  ease.
                </p>
              
            </div>
          </div>
      </div>


    </div><div class="about-how-it-works">
        <h2>How it Works for Patients</h2>
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
import React from 'react';
import '../../images';
import '../../Routes/homepage/index.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
  <div background="images/medic.jpg.jpg"></div>
  
  <div className="hero-container">
    <h1>Cure Connect</h1>
    <p>Your trusted source for healthcare and wellness</p>
    <a href="about.html" className="hero-btn"> Learn more</a>
  </div>
  <section className="about-us">
    <h2>About Cure Connect</h2>
    <p>Connecting You with the Right Medical Care in Kenya. We understand that finding the right healthcare provider can
      be a daunting and tiresome task.</p>

    <p> CureConnect, we're committed to simplifying that process by providing a comprehensive directory of medical
      specialists across Kenya.</p>
    <p> Whether you're in Nairobi, Mombasa, Naivasha, Eldoret, or Kisumu,we empower you to find the care you need,
      conveniently and efficiently.</p>


    <form className="search-form" action="/search" method="get">
      <input type="text" name="q" placeholder="Input residential area"/>
      <button type="submit">Search</button>
    </form>
  </section>
</div>
  )
}

export default Home;

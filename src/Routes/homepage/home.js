import React from 'react';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate('/district');
  };

  return (
    <div>
      <div className="hero-container">
        <h1>Cure Connect</h1>
        <p>Your trusted source for healthcare and wellness connectivity</p>
        <Link to='/about'><div className="hero-btn">
         Learn more
        </div></Link>
      </div>
      <section className="about-us">
        <h2>Why Cure Connect?</h2>
        <p>Connecting You with the Right Medical Care in Kenya. We understand that finding the right healthcare provider can
          be a daunting and tiresome task.</p>
        <p> CureConnect, we're committed to simplifying that process by providing a comprehensive directory of medical
          specialists across Kenya.</p>
        <p> Whether you're in Nairobi, Mombasa, Naivasha, Eldoret, or Kisumu,we are here to assist you in finding the care you need,
          conveniently and efficiently.</p>

        <form className="search-form" onSubmit={handleSearch}>
          <select name="category" id="category">
            <option value="">Choose District</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Eldoret">Eldoret</option>
            <option value="Kiambu">Kiambu</option>
          </select>
          <button type="submit">Search</button>
        </form>

      </section>
    </div>
  )
}

export default Home;
import React from 'react';
import Home from './Routes/homepage/home.js';
import Contact from './Routes/contact.js';
import Header from './Routes/header.js'; 
import Footer from "./Routes/footer.js";
import AboutUs from "./Routes/aboutpage/about.js";
import './global.css';



const App = () => {
  return (
    <div id="app" className='App'>
      <Header />
      <Footer />
       <Home />
      <Contact />
      <AboutUs/> 
      </div>
  );
};

export default App;

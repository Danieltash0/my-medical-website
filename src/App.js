import React from 'react';
import Home from './components/home.js';
import Contact from './components/contact.js';
import Header from './components/header.js'; 
import Footer from "./components/footer.js";
import AboutUs from "./components/about.js";
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

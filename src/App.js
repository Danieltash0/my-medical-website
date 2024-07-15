import React from 'react';
import Home from './Routes/homepage/home.js';
import Contact from './Routes/contact.js';
import Header from './Routes/header.js'; 
import Footer from "./Routes/footer.js";
import Location from './Routes/locationpage/location.js';
import AboutUs from "./Routes/aboutpage/about.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div id="app" className='App'>
      <Header />
      <Footer />
     
      </div>
  );
};

export default App;

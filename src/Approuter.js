import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Routes/aboutpage/about';
import Home from './Routes/homepage/home';
import Services from './Routes/servicespage/services';
import Location from './Routes/locationpage/location';
import District from './Routes/districtpage/district';
import Book from './Routes/bookpage/book';
import Header from './Routes/header';
import Footer from './Routes/footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
    {/* To make the header static */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path='/location' element={<Location />} />
        <Route path='/district' element={<District />} />
        <Route path='/book' element={<Book />} />
      </Routes>
      {/*To make the footer header*/}
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Routes/aboutpage/about';
import Home from './Routes/homepage/home';
import Services from './Routes/servicespage/services';
import Location from './Routes/locationpage/location';
import District from './Routes/districtpage/district';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path='/location' Component={Location} />
        <Route path='/district' Component={District} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
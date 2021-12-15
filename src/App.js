import React from 'react';
import Home from '../src/Home';
import {Routes, Route} from 'react-router-dom';
import About from "../src/About";
import Contact from "../src/Contact";
import Services from "../src/Services";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../src/Navbar';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LoginTemp from './LoginTemp';
import Pricing from '../src/Pricing'




const App = () => {
  return (
    <>
    
    <Navbar />
  

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="sign-up" element={<LoginTemp />} />
    </Routes>
       

    
   
    </>
  )
}


export default App;
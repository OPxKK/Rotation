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
      
      <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/service" element={<Services/>}/>
       <Route exact path='/sign-up' element={<LoginTemp/>}/>
       <Route exact path='/pricing' element={<Pricing/>}/>
       
    </Routes>
    
   
    </>
  )
}


export default App;
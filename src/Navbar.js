import React from 'react';
 import {IoFingerPrint} from 'react-icons/io5';
 import '../src/Navbar.css'

import { NavLink } from 'react-router-dom';


const Navbar = () => {
    let styles = { fontSize : '2rem', marginRight : '10px'}
    return (
        <>

<div className='container-fluid'>
    <div className='row'>
        <div className='col-10 mx-auto'>

  

       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
     <IoFingerPrint style={styles}/>
    <NavLink  className="navbar-brand" to=" ">$Rotation</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to= "/about">About</NavLink>
        <NavLink className="nav-link" to="/service">Services</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
    </div>
  </div>
</nav>
</div>
    </div>
</div>
        </>
    )
}

export default Navbar

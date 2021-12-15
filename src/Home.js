import React from 'react'
import { NavLink } from 'react-router-dom';
import '../src/Button.css';
import '../src/Home.css';

import img_2 from './online-payment-2496112-2088555.png';

import {GiReceiveMoney} from 'react-icons/gi';
import {GiGoldBar} from 'react-icons/gi';
import {GiPayMoney} from 'react-icons/gi';
import Pricing from '../src/Pricing';
import Footer from '../src/Footer';
import Paymentbutton from './Paymentbutton';
import Login from '../src/Login';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Client from './Client';







const Home = () => {
useEffect(() => {
  Aos.init({ duration : 2000})
}, [])





    let iconStyles = {width : '45px', height: '45px'}
    let styles = {fontSize: '1.7rem', textAlign:'center', fontWeight : 'bold'}
    
    let paraStyles = {fontSize : '20px'}
    
    return (
        <>
        <section id="header" data-aos='fade-up'>
        
    <div class="container col-xxl-8 px-4 py-5" >
    <div class="row flex-lg-row-reverse align-items-center g-5">
      <div class="col-10 col-sm-8 col-lg-6 custom_div">
    
        <img src= {img_2} class="d-block mx-lg-auto img-fluid"  alt="Bootstrap Themes" loading="lazy"/> 
      </div>
      <div class="col-lg-6">
        <h3 class="display-3 text-center fw-bold lh-1 mb-3">Make transactions using <strong className='brand-name'>$Rotation</strong></h3>
        <h4 class="pt-3 text-center">Your One time Solution for all the problems. Now avail discounts on every transaction. Get upto 30% Cashback and Unclock Crypto Plans with us.</h4>
        <div class="d-grid gap-2 pt-3 d-md-flex justify-content-center custom-button">
         <span className='btn--home'><NavLink  to='/pricing'></NavLink></span> 
          
        </div>
      </div>
    </div>
  </div>
</section>



<section id="features" data-aos='fade-down'>
        <div className="container-fluid">
<div className="row">
<div className="col-11 mx-auto  mt-5">

<div class="container px-4 py-5" id="hanging-icons">
    <h1 class="pb-2 border-bottom fw-bold text-center display-5 heading-name" >Some of our Features</h1>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="text-dark  me-3">
          <GiGoldBar style={iconStyles}/>
        </div>
        <div>
          <h2 style={styles}>Gold Investment</h2>
          <p className='text-center' style={paraStyles}>Apart from Paying bills, you can now buy Gold at 10% Discount by using Rotation App.</p>
          
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class=" text-dark ml-5">
          <GiReceiveMoney style={iconStyles}/>
        </div>
        <div>
          <h2 style={styles}>Easy Money</h2>
          <p className='text-center' style={paraStyles}>Apart from Bills, you can also invest on Crypto Apps and have a play around with Stocks. </p>
          
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="text-dark  me-3">
          <GiPayMoney style={iconStyles}/>
        </div>
        <div>
          <h2 style={styles}>Donation Camp</h2>
          <p className='text-center' style={paraStyles}>Rotation Runs Donation Camps to save Lions around the Globe. Every penny is important, so is your Donation.</p>
         
        </div>
      </div>
    </div>
  </div>


</div>

    </div>
</div>
</section>




<Pricing/>

<Paymentbutton/>

<Login/>
<Client/>

<Footer/>




       
        </>
    )
}

export default Home

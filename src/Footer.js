import React from 'react';
import '../src/Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {MdDoubleArrow} from 'react-icons/md';


const Footer = () => {

    let styles = {marginRight : '5px'}
    let iconStyles = {fontSize : '20px'}
    let brandStyle = {fontSize : '50px'}
    var para = {fontSize : '20px'}
    var para_2 = {fontSize : '16px'}
    
    
    
    return (
        <section id='footer'>
            <div className="container-fluid">
<div className="row">
<div className="col-11 mx-auto mt-3">


<footer class="page-footer">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 py-4">
          <h1 className='brand-name fw-bold' style={brandStyle}>$Rotation</h1>
          <p className='text-center fw-bold' style={para_2}>Rotation is a sub-company of <strong className='custom-p fw-bold'>Upstream Inc</strong>. Rotation apart from transaction / Bill Payments includes CryptoCurency and Stock Exchange which includes many benefits within Rotation.</p>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Quick Links</h5>
          <ul class="footer-menu">
            <li><a href="#"><MdDoubleArrow style={styles}/>How it works</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>Security</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>Pricing</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>Resources</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>Report a Bug</a></li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>About Us</h5>
          <ul class="footer-menu">
            <li><a href="#"><MdDoubleArrow style={styles}/>About Us</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>Jobs</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>Our Teams</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>Testimonials</a></li>
            <li><a href="#"><MdDoubleArrow style={styles}/>News & Press</a></li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Subscribe</h5>
          <form action="#">
            <input type="text" class="form-control" placeholder="Enter your mail.."/>
          </form>

          <div class="sosmed-button mt-4">
            <a href="#"><BsFacebook style={iconStyles}/></a>
            <a href="#"><BsInstagram style={iconStyles}/></a>
            <a href="#"><BsLinkedin style={iconStyles}/></a>
            <a href="#"><BsGithub style={iconStyles}/></a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <p className='text-center fw-bold' style={para} id="copyright">&copy; 2021 $Rotation. All rights reserved</p>
        </div>
        
      </div>
    </div> 
  </footer> 



    </div>
    </div>
</div>

        </section>
    )
}

export default Footer

import React from 'react';
import {FiSliders} from 'react-icons/fi';
import {FiTarget} from 'react-icons/fi';
import {AiOutlineApi} from 'react-icons/ai';
import Footer from './Footer';
import About_features from './About_features';
import About_Hero from '../src/About_Hero';
import '../src/About.css';



const About = () => {
    let styles = { width: '60px', height: '60px' }
    let customStyles = { fontSize : '25px', fontWeight : 'bold', paddingTop: '15px'}

    return (
       <>
       <About_Hero/>
       <div className="container-fluid">
<div className="row">
<div className="col-10 mx-auto">

<div class="container px-4 py-5" data-aos='fade-down' id="featured-3">
    <h1 class="pb-2 border-bottom fw-bold text-center display-5 heading-name">Our Features</h1>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon text-center">
        <AiOutlineApi style={styles}/>
        </div>
        <h2 className='text-center' style={customStyles}>End-to-End Encryption</h2>
        <p className='text-center'>The Transaction you make is highly secure. Rotation blocks Third party sites from accessing your data.</p>
        </div>


      <div class="feature col">
        <div class="feature-icon text-center">
        <FiSliders style={styles}/>
        </div>
        <h2 className='text-center' style={customStyles}>Additional Fixtures</h2>
        <p className='text-center'>Apart from paying your bills, you can now invest on Crypto Apps using Rotation, which will make your investment grow high.</p>
        </div>


      <div class="feature col">
        <div class="feature-icon text-center">
          <FiTarget style={styles}/>
        </div>
        <h2 className='text-center' style={customStyles}>Instant Rewards</h2>
        <p className='text-center'>Get Instant Rewards after each transaction in your Rotation Wallet. You can redeem your Rewards to avail online purchases.</p>
</div>
    </div>
  </div>



</div>
</div>
</div>

<About_features/>

<Footer/>


       </>
    )
}

export default About

import React from 'react';
import about_1 from '../src/Screenshot 2021-11-27 112910.png';
import about_2 from '../src/Screenshot 2021-11-27 111416.png';
import about_3 from '../src/Screenshot 2021-11-27 111618.png'
import about_4 from '../src/Screenshot 2021-11-27 112523.png';
import about_5 from '../src/Screenshot 2021-11-27 112005.png';
import about_6 from '../src/Screenshot 2021-11-27 112129.png';
import '../src/About_features.css';






const About_features = () => {
    
    var cardTitle = {textAlign : 'center'}
    var imgSize = {width : '100%', height : '200px'}


    return (
        
    <>
<section id='about_features'>
    <div className='container-fluid'>
<div className='row'>
    <div className='col-10 mx-auto pb-5'>
      <div className=' py-5 text-center'>

        <h2 className='fw-bold text-white'>Some of our Popular Services</h2>
      </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
  <div class="col">
    <div class="card" data-aos='flip-left'>
      <img src={about_1} style={imgSize} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={cardTitle}>Upstream Save Lions Drive</h5>
        <p class="card-text text-center">Upstream has taken the responsibility of saving lions from all around the globe. This is done using Citizen's Precious Donations.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" data-aos='flip-up'>
      <img src={about_2}style={imgSize}  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={cardTitle}>Upstream Prime Video</h5>
        <p class="card-text text-center">Upstream has its own Prime Video service, where one can enjoy watching all the latest movies / series in all Genre, with Subscription.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" data-aos='flip-right'>
      <img src={about_3} style={imgSize} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={cardTitle}>Upstream Cloud</h5>
        <p class="card-text text-center">A Cloud Computing Service for users, where one can store free storage upto 40 GB based on individual Membership. Cloud Service with many benefits. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" data-aos='flip-left'>
      <img src= {about_4} style={imgSize} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={cardTitle}>Upstream Main Website</h5>
        <p class="card-text text-center">The Parent Domain of Upstream, whcih includes all the benefits and all the factors and many services based on certain memberships. </p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card" data-aos='flip-up'>
      <img src={about_5} style={imgSize} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={cardTitle}>Upstream E-Commerce</h5>
        <p class="card-text text-center">An Ecommerce Domain for all the users, which is Unisex, consisting of many offers and best prices and also includes best brands.</p>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card" data-aos='flip-right'>
      <img src={about_6} style={imgSize} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={cardTitle}>Software Training</h5>
        <p class="card-text text-center">The Training domain by Upstream is absolutely free for the users, who are willing to learn new courses based on the recent technology.</p>
      </div>
    </div>
  </div>



</div>



    </div>
</div>
</div>



</section>

    </>



    )
}

export default About_features

import React from 'react'
import '../src/About_Hero.css';
import about_img1 from '../src/photo-1522071820081-009f0129c71c.jpg'

const About_Hero = () => {
    return (
       
<>
<section id="about" class="about">
<div className='container-fluid'>
    <div className='row'>
        <div className='col-12 mx-auto my-5 py-3'>

 

      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3 className='text-center fw-bold pb-2'>Who Are We?</h3>
              <h2 className='text-center pb-2'><strong className='brand-name'>$Rotation</strong> is a sub-domain of Upstream, which is  a multi-domain organization that provides multiple servies to its users. </h2>
              <p className='text-center'>
                Rotation provides multiple functions to its users mainly CryptoCurrency and Stocks, Apart from Paying Bills. Rotation under Memberships and specific Terms And Conditions provides benefits to its users on a large scale.
              </p>
              
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src={about_img1}  class="img-fluid" alt=""/>
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

export default About_Hero

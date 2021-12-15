import React from 'react'
import img_3 from '../src/bg_image_1.png';
import Footer from './Footer';
import '../src/Services.css';
import { NavLink } from 'react-router-dom';

const Services = () => {
    let styles = {width: '70%', height: '70%'}
    var paraStyles = {
      fontSize : '20px'
    }

    return (
        <>
        <section id='services_hero' >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto py-5'>
                        
<div className="page-section" data-aos='fade-up'>
      <div className="container pt-5">
        <div className="row">
          
          <div className="col-lg-6 py-3 wow zoomIn order-2 order-lg-2">
            <div className="img-place text-center">
              <img src={img_3} style={styles} className = 'img-fluid' alt=""/>
            </div>
          </div>
          <div className="col-lg-6 py-5 wow fadeInLeft">
            <h1 className="title-section text-center fw-bold display-5 text-white">We're <span className="marked">ready to</span> <strong className='brand-name'>Serve</strong> you with the best.</h1>
            <div className="divider"></div>
            <p className="mb-4 mt-3 text-center text-white" style={paraStyles}>We provide marketing services to startups & small business to looking for partner for their digital media, design & dev lead generation & communication.</p>
            <div className='d-grid gap-2 pt-3 d-md-flex justify-content-center'>
            <span className='btn--home2'><NavLink to='/about'></NavLink></span>
            </div>
        
            
            
          </div>
        </div>
      </div> 
    </div> 
  
                    </div>
                </div>
            </div>


        </section>






<div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>

                    <div class="accordion py-5 my-5" id="accordionExample" data-aos='fade-down'>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Do we provide CrowdFunding?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      No, we dont provide CrowdFunding. We want our users to play around with cryptocurrency and stock market. This helps uers to grab more attraction and earn more benefits.       
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Where do we operate from?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       We operate on online basis. We are located at Borivali West , Mumbai. Our Head office at Trombay, Mumbai.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Do we Recruit Employees?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, we do recruit employees. Every half the year, we tend to recruit youngsters having good technical and logical skills.
      </div>
    </div>
  </div>
</div>



                      </div>
                      </div>
                      </div>





<Footer/>

        </>
    )
}

export default Services

import React from 'react'
import '../src/Pricing.css'
import {TiTick} from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

const Creditcard = () => {
  let styles = {alignItems : 'flex-start', fontSize: '20px'}
    return (
        <>
        <section id = 'pricing'>
<div className='container-fluid'>
<div className='row'>
  <div className='col-12 mx-auto'>
  <div className='px-4 py-4'>
                  <h1 class="pb-2 text-white fw-bold text-center pt-5">Our Pricing</h1>
              </div>
  
<section className='pricing py-3'>
<div id="generic_price_table">   
<div class="container">
    <div class="row">
    
      <div class="col-lg-4">
          
        <div class="card mb-5 mb-lg-0">
            
          <div class="card-body">
              
            <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 class="card-price text-center border-bottom pb-3"><strong className='brand-name'>$0</strong><span class="period">/month</span></h6>
            
            <ul class="fa-ul pt-3">
              <li><TiTick style={styles}/>Limited Rewards</li>
              <li><TiTick style={styles}/>20% Cashback</li>
              <li><TiTick style={styles}/>Eligibility for Silver Card</li>
              <li><TiTick style={styles}/>Unlock Gold Membership</li>
              
            </ul>
            <div class="d-grid">
              <NavLink to={'/sign-up'} id="testbutton" class="text-uppercase"></NavLink>
            </div>
          </div>
        </div>
      </div>
   
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 class="card-price text-center border-bottom pb-3"><strong className='brand-name'>$9</strong><span class="period">/month</span></h6>
  
            <ul class="fa-ul pt-3">
              <li><TiTick style={styles}/> Unlimited Rewards</li>
              <li><TiTick style={styles}/>Upto 30% Cashback</li>
              <li><TiTick style={styles}/>Unlock CryptoCurrency</li>
              <li><TiTick style={styles}/>Unlock Stocks</li>
              <li><TiTick style={styles}/>Get 13% Additional Benefits on Stocks</li>
             
              
            </ul>
            <div class="d-grid">
              <NavLink to={'/sign-up'}  id='testbutton' class="text-uppercase"></NavLink>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 class="card-price text-center border-bottom pb-3"><strong className='brand-name'>$49</strong><span class="period">/month</span></h6>
     
            <ul class="fa-ul pt-3">
              <li><TiTick style={styles}/>Unlimited Rewards
              </li>
              <li><TiTick style={styles}/>Upto 40% Cashback</li>
              <li><TiTick style={styles}/>RazorPay Special Gifts</li>
              <li><TiTick style={styles}/>Additional Gifts by Rotation </li>
              
            </ul>
            <div class="d-grid">
              <NavLink to={'/sign-up'}  id='testbutton' class="text-uppercase"></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
         
  
</div>
 
</section>    
</div>
</div>
</div>
</section>

        </>





        
    )
}

export default Creditcard

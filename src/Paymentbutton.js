import React from 'react'
import razorpay from '../src/Razorpaay.png'
import { useEffect } from 'react';
import '../src/Paymentbutton.css'



const Paymentbutton = () => {
    let paraStyles = {fontSize : '20px', textAlign : 'center'}
    
    useEffect(()=>{
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById('donateForm');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id','pl_IN78iatzHRfAsT')
        Form.appendChild(Script);
      },[])
  
   
    return (
        <>
        <section id='payment'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-11 mx-auto'>



  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 pb-5 col-lg-6 justify-content-center custom_div">
        <img src={razorpay}  class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-center">Quick Payments using <strong className='brand-name'>Razorpay</strong></h1>
        <p style={paraStyles}>Our Payments Partner Razorpay ensures your payment is quick and 100% secure. From Bank Transfers to Paying Bills, Razorpay has its own benefits.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5 mb-5">
      <form id='donateForm'> </form>
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

export default Paymentbutton

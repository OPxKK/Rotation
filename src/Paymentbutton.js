import React from 'react'
import razorpay from '../src/Screenshot 2021-11-25 094441.png';
import { useEffect } from 'react';



const Paymentbutton = () => {
    let paraStyles = {fontSize : '20px'}
    
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

                <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold">Quick Payments using RazorPay</h1>
    <div class="col-lg-6 mx-auto">
      <p class=" mb-4" style={paraStyles}>Our Payments Partner Razorpay ensures your payment is quick and 100% secure. From Bank Transfers to Paying Bills, Razorpay has its own benefits.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <form id='donateForm'> </form>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="container px-5 custom-container">
        <img src= {razorpay}  className="img-fluid border rounded-3 shadow-lg"  alt="Example image" />
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

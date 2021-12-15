import React from 'react'
import { NavLink } from 'react-router-dom'
import '../src/Login.css'
import sign_up from '../src/sign-concept-illustration_114360-5375.jpg'

const Login = () => {
    return (
        <>
		<section id='login' data-aos='fade-up'>
         <div className='container-fluid'>
        <div className='row'>
        <div className='col-11 mx-auto'>
      


		<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div class="col-lg-6" >
        <h2 class="display-5 fw-bold lh-1 mb-3 text-center">Login with <strong className='brand-name'>$Rotation</strong>, to recieve best offers.</h2>
        <p class="lead mt-5 text-center">With Rotation, you can transact in multiple ways at a time. Being a partner with us will give you more benefits related to CryptoCurrency and Stocks. So, why wait? Join us today!</p>
        <div class="d-grid gap-2 mt-5 d-flex justify-content-lg-start">
			<NavLink to={'/sign-up'} id='testbutton3'></NavLink>
        </div>
      </div>
	  <div class="col-10 col-sm-8 col-lg-6 custom_div" >
        <img src={sign_up} class="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
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

export default Login;

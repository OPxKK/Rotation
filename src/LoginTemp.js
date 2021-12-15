import React from 'react';
import '../src/LoginTemp.css'
import {BsGoogle} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

const LoginTemp = () => {

    var iconStyles = {fontSize : '24px', marginRight : '10px'}

    return (
        <>
        <section id='loginform'>
        <div className='container-fluid'>
<div className='row'>
  <div className='col-12 mx-auto'>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
           
          </div>
          <div class="card-body p-4 p-sm-5">
            <h3 class="card-title text-center mb-5 fw-light fw-bold">Register / Sign-Up!</h3>
            <form>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus/>
                <label for="floatingInputUsername">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com"/>
                <label for="floatingInputEmail">Email address</label>
              </div>

         

              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password"/>
                <label for="floatingPasswordConfirm">Confirm Password</label>
              </div>

              <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
              </div>

              <a class="d-block text-center mt-3 mb-3 small" href="#">Have an account? Sign In</a>


              <div class="d-grid mb-2 mt-3">
                <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                  <BsGoogle style={iconStyles}/> Sign up with Google
                </button>
              </div>

              <div class="d-grid mt-3">
                <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                <BsFacebook style={iconStyles}/> Sign up with Facebook
                </button>
              </div>

            </form>
          </div>
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

export default LoginTemp

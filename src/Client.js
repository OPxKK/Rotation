import React from 'react';
import '../src/Client.css';
import paytm from '../src/2560px-Paytm_Logo_(standalone).svg.png';
import bnb from '../src/binance-coin-bnb-logo.png';
import ryzen from '../src/35-354592_amd-logo-ryzen-logo-hd-png-download.png';
import airbnb from '../src/13-133395_airbnb-logo-airbnb-logo-png-transparent-png.png';
import aws from '../src/1024px-Amazon_Web_Services_Logo.svg.png';
import razorpay from '../src/png-clipart-india-payment-gateway-razorpay-startup-company-india-company-text (1).png';
import bhimupi from '../src/419-4195720_upi-icon-png-transparent-clipart.png';

const Client = () => {

    
    return (
        <>
 


 <div class="wrapper">
          <div class="slider">
            <div class="slide">
              <img src={paytm} />
              <img src= {bnb}/>
              <img src= {razorpay}/>
              <img src= {airbnb}/>
              <img src= {aws}/>
              <img src= {ryzen}/>
              <img src= {bhimupi}/>
            </div>
            <div class="slide">
            <img src={paytm} />
              <img src= {bnb}/>
              <img src= {razorpay}/>
              <img src= {airbnb}/>
              <img src= {aws}/>
              <img src= {ryzen}/>
              <img src= {bhimupi}/>
            </div>
          </div>
      </div>



        </>
    )
}

export default Client;

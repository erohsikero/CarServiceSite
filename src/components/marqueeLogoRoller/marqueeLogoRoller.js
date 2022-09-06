import React from 'react';
import Marquee from 'react-fast-marquee';
import './marqueeLogoRoller.css'


function marqueeLogoRoller() {
  return (
    <div className='overView' >
      <div className="title">
        <span>BRANDS WE SERVICE & REPAIR</span>
      </div>

      <div className='imageRollBg'>
        <Marquee direction="right" speed={100} delay={1}>
          <div className="image_wrapper">
            <img src='./carlogo/logo1.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo2.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo3.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo4.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo5.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo6.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo7.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo8.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo9.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo10.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo11.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo12.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo13.png' alt="" />
          </div>

          <div className="image_wrapper">
            <img src='./carlogo/logo14.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo15.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo16.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo17.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo18.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo19.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo20.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='./carlogo/logo21.png' alt="" />
          </div>
          
        </Marquee>
      </div>
    </div>
  );
}

export default marqueeLogoRoller;

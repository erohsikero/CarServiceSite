import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter style={{ backgroundColor: "#05386B" }} className='text-center text-white text-lg-start'>
      <section className='p-4'>
        <MDBContainer className='text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol className='mx-auto mb-4'>
              <img
                alt=""
                src="./logoFull.png"
                width="225"
                height="110"
                className="d-inline-block"
                style={{ filter: 'brightness(2)' }}
              />
              <p className='text-left'>
                CarClinic is Chennai’s fastest growing network of new age car repair workshops offering transparent, hassle-free and predictable car repair experience to car owners.
              </p>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
            </MDBCol>
            <MDBCol className='mx-auto mb-4 text-left'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <ul>
                <li>
                  <a href='#/our-services' className='text-reset'>
                    A/C Service & Repair
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Body Shop & Crash Repair
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Car Spa & Detailing
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Car Wash
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Electrical Service & Repair
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Engine Diagnostics & Solutions
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Feedback & Follow-up
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    General Mechanical & Electrical check-up
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    General Service
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Mechanical Service & Repair
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Pickup and Drop
                  </a></li><li>
                  <a href='#/our-services' className='text-reset'>
                    Tyre & Wheel Service
                  </a></li>
              </ul>
            </MDBCol>
            <MDBCol className='mx-auto mb-md-0 mb-4 text-left'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                2/147, Mount Poonamallee Rd,
                Opposite to YAMAHA showroom,
                Kattupakkam, Chennai, Tamil Nadu 600056
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                carclinicchennai@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 9003465200, 9384888448
              </p>
              <p>
                <MDBIcon class="fab fa-whatsapp" className="me-3" /> 9003465200, 9384888448
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 044-43800664
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <a href='https://www.cerpsoft.in/' style={{ color: 'black' }}>
          Copyright 2022 Cerpsoft, All Rights Reserved.
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
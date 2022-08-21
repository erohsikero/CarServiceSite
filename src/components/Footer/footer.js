import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () =>{
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-start text-muted'>

      <section className='p-4 border-top'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <img
                    alt=""
                    src="./logoFull.png"
                    width="225"
                    height="110"
                    className="d-inline-block"
                />
              {/* <h6 className='text-uppercase fw-bold mb-4'>
                        
                Company name
              </h6> */}
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


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-left'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <p>
                <a href='#!' className='text-reset'>     
                Full Serivce
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Maintenance
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Repairs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Body Shop
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                A/c Work
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-left'>
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

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          test.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
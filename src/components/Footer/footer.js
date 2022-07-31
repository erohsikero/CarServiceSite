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
                    src="/mediaFiles/logoBlackClear.png"
                    width="200"
                    height="90"
                    className="d-inline-block"
                />
              {/* <h6 className='text-uppercase fw-bold mb-4'>
                        
                Company name
              </h6> */}
              <p>
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
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
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
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

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Chennai, 123, Tamil Nadu
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
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
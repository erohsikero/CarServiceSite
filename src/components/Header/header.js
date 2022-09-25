import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';

const Header = () => {
    return (
        <>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                {/* <span className="border-end"><MDBIcon icon="phone" className="me-3" />Call us: +91-9XXXXXXXX0 &nbsp; &nbsp;</span>
                <span className="border-start">&nbsp;&nbsp;<MDBIcon icon="home" className="me-3" /> Open Hours: 7:00 am - 9:00 pm (Mon - Sun)</span> */}
                <span><MDBIcon icon="home" className="me-3" /> Open Hours: 9:30 am - 7:30 pm (Mon - Sat)</span>
                </div>

                <div>
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
                </div>
            </section>
            
            <Navbar expand="lg" variant="dark" style={{backgroundColor: "#05386B"}}>
                <Container>
                    <Navbar.Brand href="#/home">
                        <img
                            alt="Car Clinic"
                            src="./logo.png"
                            width="140"
                            height="70"
                            className="d-inline-block align-top"
                            style={{filter: 'brightness(2)'}}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#/home" style={{color: 'white'}}>Home</Nav.Link>
                            <Nav.Link href="#/about-us" style={{color: 'white'}}>About Us</Nav.Link>
                            <Nav.Link href="#/our-services" style={{color: 'white'}}>Our Services</Nav.Link>
                            <Nav.Link href="#/gallery" style={{color: 'white'}}>Gallery</Nav.Link>
                            <Nav.Link href="#/customer-review" style={{color: 'white'}}>Customer Review</Nav.Link>
                            <Nav.Link href="#/contact" style={{color: 'white'}}>Contact</Nav.Link>
                            <Nav.Link href="#/bookAnAppointmentForm" style={{color: 'white'}}>Book An Appointment</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
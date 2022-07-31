import { Container, Nav, Navbar } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';

const Header = () => {
    return (
        <>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                <span className="border-end"><MDBIcon icon="phone" className="me-3" />Call us: +91-9XXXXXXXX0 &nbsp; &nbsp;</span>
                <span className="border-start">&nbsp;&nbsp;<MDBIcon icon="home" className="me-3" /> Open Hours: 7:00 am - 9:00 pm (Mon - Sun)</span>
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
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
                </div>
            </section>
            <Navbar bg="white" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt="Car Clinic"
                            src="/logo.jpeg"
                            width="175"
                            height="60"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <Nav.Link href="/our-services">Our Services</Nav.Link>
                            <Nav.Link href="#bookAnAppointmentForm">Book Appointment</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/customer-review">Customer Review</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
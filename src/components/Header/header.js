import { Button, Container, Nav, Navbar, Row ,Col } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';

const Header = () => {
    return (
        <>
          <Row>
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
            </Row>
            
        <Navbar  style={{backgroundColor: "#05386B"}} expand="lg">
        <Container fluid>
            <Navbar.Brand href="#"> 
                <img
                    alt="Car Clinic"
                    src="./logo.png"
                    width="210"
                    height="100"
                    className="d-inline-block align-top"
                    style={{filter: 'brightness(2)'}}
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            
            <Navbar.Collapse id="navbarScroll">
            
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#/home" style={{color: 'white'}}>Home</Nav.Link>
                <Nav.Link href="#/about-us" style={{color: 'white'}}>AboutUs</Nav.Link>
                <Nav.Link href="#/our-services" style={{color: 'white'}}>OurServices</Nav.Link>
                <Nav.Link href="#/gallery" style={{color: 'white'}}>Gallery</Nav.Link>
                <Nav.Link href="#/customer-review" style={{color: 'white'}}>CustomerReview</Nav.Link>
                <Nav.Link href="#/contact" style={{color: 'white'}}>Contact</Nav.Link>
                <Nav.Link href="#/bookAnAppointmentForm" style={{color: 'white'}}>Book-An-Appointment</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                /> */}
                {/* <Button variant="outline-success">Search</Button> */}
                <div style={{ color: 'white' }} className='d-block justify-content-center text-center'>
                    <img
                        alt="AIAWA MEMBERSHIP"
                        src="./aiawaLogo.png"
                        height={"60px"}
                        width={"100px"}
                        style={{filter: 'brightness(2)'}}
                    /> 
                    <p>Member of AIAWA</p>
                </div>
            {/* </Form> */}
            </Navbar.Collapse>
        </Container>
        </Navbar>

        </>
    );
}

export default Header;
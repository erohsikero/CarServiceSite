import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
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
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src="/logo.png"
                            width="100"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <Nav.Link href="/our-services">Our Services</Nav.Link>
                            <Nav.Link href="/book-appointment">Book Appointment</Nav.Link>
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
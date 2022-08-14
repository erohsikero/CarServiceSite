import { Col, Container, Row } from "react-bootstrap";

const ContactInformation = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <div class='info-card'>
                        <div class='card-icon'>
                            <img
                                alt="location"
                                src="/icons/location.png"
                                height={"60px"}
                                width={"60px"}
                            />
                        </div>
                        <div class='card-text'>
                            <h3>Address</h3>
                            <p>Chennai, 123, Tamil Nadu</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div class='info-card'>
                        <div class='card-icon'>
                            <img
                                alt="call us"
                                src="/icons/callUs.png"
                                height={"40px"}
                                width={"40px"}
                            />
                        </div>
                        <div class='card-text'>
                            <h3>Call Us Now</h3>
                            <p>+91-9988776655</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div class='info-card'>
                        <div class='card-icon'>
                            <img
                                alt="mail"
                                src="/icons/mail.png"
                                height={"80px"}
                                width={"70px"}
                            />
                        </div>
                        <div class='card-text'>
                            <h3>Mail Us Today</h3>
                            <p>youremail@gmail.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactInformation;
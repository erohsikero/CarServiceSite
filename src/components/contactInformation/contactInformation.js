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
                            <p class="text-left">2/147, Mount Poonamallee Rd, 
                            Opposite to YAMAHA showroom, 
                            Kattupakkam, Chennai, Tamil Nadu 600056
                            </p>
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
                            <p class='text-left'>Mobile : 9003465200, 9384888448 <br/> Whatsapp: 9003465200, 9384888448 <br/>Land line: 044-43800664</p>
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
                            <p>carclinicchennai@gmail.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactInformation;
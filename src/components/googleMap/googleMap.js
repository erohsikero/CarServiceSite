import { Col, Container, Row } from "react-bootstrap"

const GoogleMap = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124431.13676108867!2d80.0288145!3d12.9415553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638dab921b9d%3A0xf383e09c189fa9ee!2sCar%20Clinic%20Multibrand%20Bosch%20Express%20Car%20Service!5e0!3m2!1sen!2sin!4v1661095513725!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowfullscreen="" title="location"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default GoogleMap;
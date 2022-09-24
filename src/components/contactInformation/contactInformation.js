import { MDBIcon } from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../Card/Card";

const ContactInformation = () => {
    const contact = (
        <>
            <MDBIcon icon="phone" /> 9003465200, 9384888448 <br />
            <MDBIcon class="fab fa-whatsapp" /> 9003465200, 9384888448 <br />
            <MDBIcon icon="envelope" /> 044-43800664
        </>
    )

    const mail = (
        <>
            <MDBIcon icon="envelope" /> carclinicchennai@gmail.com
        </>
    )

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card titleData={'Address'} bodyData={'2/147, Mount Poonamallee Rd, Opposite to YAMAHA showroom, Kattupakkam, Chennai, Tamil Nadu 600056'} iconValue={'./icons/location.png'} height={'60px'} width={'60px'}></Card>
                </Col>
                <Col>
                    <Card titleData={'Call Us Now'} bodyData={contact} iconValue={'./icons/callus.png'} height={'50px'} width={'50px'}></Card>
                </Col>
                <Col>
                    <Card titleData={'Mail Us Today'} bodyData={mail} iconValue={'./icons/mail.png'} height={'60px'} width={'60px'}></Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactInformation;
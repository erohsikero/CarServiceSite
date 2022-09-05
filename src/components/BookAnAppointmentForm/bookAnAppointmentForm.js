import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./bookAnAppointmentForm.module.css";

const BookAnAppointmentForm = () => {
    const bookAnAppointment = (props) => {
        console.log(props);
    }

    return (
        <section id="bookAnAppointmentForm" className="mt-5">
              <Form class="gform pure-form pure-form-stacked" method="POST" data-email="example@email.net"
  action="https://script.google.com/macros/s/AKfycby-wis9ilO3HUHzX8sGBZpQVs1H18tYC3-77TAEynJdqH5RwGHvBEUHUL4T1nuKikNr/exec">
                <Container className={classes['form-container']} fluid>
                    <Row>
                        <Col md={6} sm={8} className="mb-4">
                            <h2>Book an Appointment</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerName">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                        </Col>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerPhone">
                                <Form.Control type="tel" placeholder="You Contact Number" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerEmail">
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                        </Col>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerService">
                                <Form.Select>
                                    <option>Select a service...</option>
                                    <option>Engine Repair</option>
                                    <option>Tier Replacement</option>
                                    <option>Transmission</option>
                                    <option>Diagnostic</option>
                                    <option>Batteries</option>
                                    <option>Brakes</option>
                                    <option>Others</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={8} className="mb-4">
                            <Form.Group controlId="customerMessage">
                                <Form.Control as="textarea" rows={3} placeholder="Message" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={8}>
                            <Button type="submit">Send Message</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </section>
    );
}

export default BookAnAppointmentForm;
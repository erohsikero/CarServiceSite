import Toast from "react-bootstrap/Toast";
import { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { emailService } from "../../services/emailService";
import classes from "./bookAnAppointmentForm.module.css";
import { Link } from "react-router-dom";

const BookAnAppointmentForm = () => {
    const customerNameRef = useRef();
    const customerPhoneRef = useRef();
    const customerEmailRef = useRef();
    const customerServiceRef = useRef();
    const customerMessageRef = useRef();
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showFailureToast, setShowFailureToast] = useState(false);
    const successToast = <>
        <Toast
            className="d-inline-block m-1"
            bg="success"
            autohide={true}
            delay={5000}
            show={showSuccessToast}
            onClose={() => setShowSuccessToast(false)}
        >
            <Toast.Header closeButton={false}>
                <strong className="me-auto">Success!!!</strong>
            </Toast.Header>
            <Toast.Body className='text-white'>
                Successfully booked an Appointment...
            </Toast.Body>
        </Toast>
    </>

    const failureToast = <>
        <Toast
            className="d-inline-block m-1"
            bg="danger"
            autohide={true}
            delay={5000}
            show={showFailureToast}
            onClose={()=>setShowFailureToast(false)}
        >
            <Toast.Header closeButton={false}>
                <strong className="me-auto">Failure!!!</strong>
            </Toast.Header>
            <Toast.Body className='text-white'>
                Please <Link href="/contact">Contact</Link>...
            </Toast.Body>
        </Toast>
    </>

    const bookAnAppointment = (event) => {
        event.preventDefault();
        let formData = {}
        formData['customerName'] = customerNameRef.current.value
        formData['customerPhone'] = customerPhoneRef.current.value
        formData['customerEmail'] = customerEmailRef.current.value
        formData['customerService'] = customerServiceRef.current.value
        formData['customerMessage'] = customerMessageRef.current.value

        emailService(formData).then((res) => {
            customerNameRef.current.value = '';
            customerEmailRef.current.value = '';
            customerPhoneRef.current.value = '';
            customerServiceRef.current.value = 'Select a service...';
            customerMessageRef.current.value = '';

            if (res.data.result === 'success') {
                setShowSuccessToast(true)
            } else {
                setShowFailureToast(true)
            }
            console.log(res)
        });
    }

    return (
        <section id="bookAnAppointmentForm">
            {successToast}
            {failureToast}
            <Form onSubmit={bookAnAppointment}>
                <Container className={`${classes['form-container']} d-block w-100`} fluid>
                <div class="blur"></div>
                    <Row>
                        <Col md={6} sm={8} className="mb-4">
                            <h2>Book an Appointment</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerName">
                                <Form.Control type="text" placeholder="Your Name" ref={customerNameRef} />
                            </Form.Group>
                        </Col>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerPhone">
                                <Form.Control type="tel" placeholder="Enter phone" ref={customerPhoneRef} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerEmail">
                                <Form.Control type="email" placeholder="Your Email" ref={customerEmailRef} />
                            </Form.Group>
                        </Col>
                        <Col md={3} sm={8} className="mb-4">
                            <Form.Group controlId="customerService">
                                <Form.Select ref={customerServiceRef}>
                                    <option>Select a service...</option>
                                    <option>A/C Service & Repair</option>
                                    <option>Body Shop & Crash Repair</option>
                                    <option>Car Spa & Detailing</option>
                                    <option>Car Wash</option>
                                    <option>Electrical Service & Repair</option>
                                    <option>Engine Diagnostics & Solutions</option>
                                    <option>Feedback & Follow-up</option>
                                    <option>General Mechanical & Electrical check-up</option>
                                    <option>General Service</option>
                                    <option>Mechanical Service & Repair</option>
                                    <option>Pickup and Drop</option>
                                    <option>Tyre & Wheel Service</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={8} className="mb-4">
                            <Form.Group controlId="customerMessage">
                                <Form.Control as="textarea" rows={3} placeholder="Message" ref={customerMessageRef} />
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
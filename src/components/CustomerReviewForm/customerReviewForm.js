import Toast from "react-bootstrap/Toast";
import { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./customerReviewForm.module.css";
import database from "../../services/firebase";



const CustomerReviewForm = () => {
    const customerNameRef = useRef();
    const customerPhoneRef = useRef();
    const customerEmailRef = useRef();
    const customerServiceRatingRef = useRef();
    const customerMessageRef = useRef();
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showFailureToast, setShowFailureToast] = useState(false);
    const [loader,setLoader] = useState(false);

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
                Successfully Submitted...
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
            onClose={() => setShowFailureToast(false)}
        >
            <Toast.Header closeButton={false}>
                <strong className="me-auto">Failure!!!</strong>
            </Toast.Header>
            <Toast.Body className='text-white'>
                Please <Link href="/contact">Contact</Link>...
            </Toast.Body>
        </Toast>
    </>

    const submitCustomerReview = (event) => {
        setLoader(true);
        event.preventDefault();
        let formData = {}
        formData['name'] = customerNameRef.current.value
        formData['phoneNumber'] = customerPhoneRef.current.value
        formData['email'] = customerEmailRef.current.value
        formData['rating'] = customerServiceRatingRef.current.value
        formData['reviewMessage'] = customerMessageRef.current.value
        formData['reviewDate'] = new Date().toDateString();
        formData['currentMillis'] = Math.round((new Date()).getTime() / 1000);

        // database.ref().orderByChild("currentMillis").limitToFirst(5).get().then((snapshot) => {
        //     if (snapshot.exists()) {
        //       console.log("GET DATA");
        //       console.log(snapshot.val());
        //     } else {
        //       console.log("No data available");
        //     }
        //   }).catch((error) => {
        //     console.error(error);
        //   });

        database.ref("reviews/"+formData['phoneNumber']+"/"+formData['currentMillis']).set(formData,(error)=>{

            customerNameRef.current.value = '';
            customerPhoneRef.current.value = '';
            customerEmailRef.current.value = '';
            customerServiceRatingRef.current.value = 'Excellent';
            customerMessageRef.current.value = '';

            if(error){
                setShowFailureToast(true);
                console.log('failure Data :', formData);
                alert("FAILED TO ADD REVIEW ");
                setLoader(false);

            }else{
                setShowSuccessToast(true);
                console.log('Success data :', formData)
                alert("Review Added Successfully");
                setLoader(false);
            }
          }).catch(alert);

        console.log('DATA : ', formData)
    }

    return (
        <section>
            {successToast}
            {failureToast}
            <h1 style={{color: "#05386B", fontWeight: "bold"}}>Customer Review</h1>
            <Form onSubmit={submitCustomerReview}>
                <Container className={`${classes.container}`}>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Form.Group controlId="customerName">
                                <Form.Control type="text" placeholder="Your Name" ref={customerNameRef} required={true}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Form.Group controlId="customerPhone">
                                <Form.Control type="tel" placeholder="Enter phone" ref={customerPhoneRef} required={true} pattern="[+0-9]{0,4}[0-9]{3}[0-9]{3}[0-9]{4}" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Form.Group controlId="customerEmail">
                                <Form.Control type="email" placeholder="Your Email" ref={customerEmailRef} required={true} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="mt-2"><h5 style={{color: "#05386B", fontWeight: "bold"}}>RATING</h5></Col>
                        <Col lg={3} className="mb-4">
                            <Form.Group controlId="customerServiceRating">
                                <Form.Select ref={customerServiceRatingRef}>
                                    <option>Excellent</option>
                                    <option>Poor</option>
                                    <option>Average</option>
                                    <option>Good</option>
                                    <option>Satisfied</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Form.Group controlId="customerMessage">
                                <Form.Control as="textarea" rows={3} placeholder="Review comments" ref={customerMessageRef} required={true} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" style={{background : loader ? "#ccc" : "rgb(66, 133, 244)"}}>Submit</Button>
                        </Col>                
                    </Row>
                </Container>
            </Form>
        </section>
    );
}

export default CustomerReviewForm;
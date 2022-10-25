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

        let reviewPoint = {}
        reviewPoint['totalCustomerReviews'] = 0;
        reviewPoint['reviewsAvg'] = 5;

        (async () => {
            await database.ref("reviewStat")
                .get()
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        var snapVal = snapshot.val();
                        console.log("Fetch reviewStat Value : ", snapVal);
                        reviewPoint['reviewsAvg'] = snapVal.reviewsAvg ;
                        reviewPoint['totalCustomerReviews'] = snapVal.totalCustomerReviews;
                    } else {
                        console.log("No data available for reviewStat Value");
                        console.log(customerServiceRatingRef.current.value);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });

                console.log("Old Review Value : " +reviewPoint['reviewsAvg']);
                console.log("Old Reviewer Count : " +reviewPoint['totalCustomerReviews']);
                reviewPoint['totalCustomerReviews'] = reviewPoint['totalCustomerReviews'] + 1;
                console.log("New Reviewer Count : " +reviewPoint['totalCustomerReviews']);
                var toRoundOff = reviewPoint['reviewsAvg'] + (( customerServiceRatingRef.current.value - reviewPoint['reviewsAvg'])/reviewPoint['totalCustomerReviews'])
                console.log("New toRoundOff Value : " +toRoundOff);
                reviewPoint['reviewsAvg'] = Math.round((toRoundOff + Number.EPSILON) * 100) / 100;
                console.log("New Review Value : " +reviewPoint['reviewsAvg']);

                database.ref("reviewStat").set(reviewPoint,(error) =>{
                    if(error){
                        console.log('Failed to insert data Current Total Rating :', reviewPoint);
                    }else{
                        console.log('Success instert data Review Total Value :',reviewPoint )
                    }
                }).catch(alert);
                
        })();        

        database.ref("reviews/"+formData['currentMillis']+"_"+formData['phoneNumber']).set(formData,(error)=>{

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
                                <Form.Control type="tel" placeholder="Enter phone" ref={customerPhoneRef} pattern="[+0-9]{0,4}[0-9]{3}[0-9]{3}[0-9]{4}" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Form.Group controlId="customerEmail">
                                <Form.Control type="email" placeholder="Your Email" ref={customerEmailRef} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="mt-2"><h5 style={{color: "#05386B", fontWeight: "bold"}}>RATING</h5></Col>
                        <Col lg={3} className="mb-4">
                            <Form.Group controlId="customerServiceRating">
                                <Form.Select ref={customerServiceRatingRef}>
                                    <option value='5' >Excellent</option>
                                    <option value='4'>Satisfied</option>
                                    <option value='3'>Good</option>
                                    <option value='2'>Average</option>
                                    <option value='1'>Poor</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Form.Group controlId="customerMessage">
                                <Form.Control as="textarea" rows={3} placeholder="Review comments" ref={customerMessageRef} />
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
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from "./aboutUsContainer.module.css";

const AboutUsContainer = ({showButton = true}) => {
    return (
        <Container className={classes['root']}>
            
            <Row>
                    <div className={classes['about-img']}>
                        <img className={classes['about-img']} src="./Gallery/Photos/unnamed.jpeg" alt="" />
                    </div>
            </Row>
            <Row>
                <Col>
                    <div className={classes['about-us-content']}>
                        <h2>Car Clinic MultiBrand Car Service</h2>
                        
                        <p className="text-justify">Car Clinic MultiBrand Car Service center chain was established in Chennai in the year 2016 by two passionate engineers and childhood friends Mr. Mohammad Shaffee and Mr. Noor Mydeen. The latter being the active partner in the business graduated in mechanical engineering in the year 1990. Mr. Mydeen started his career as a mechanical technician at a renowned concern in the United Arab Emirates in 1991. Over the year with hard work and determination, he was promoted to manager of the same concern. After 20 years of extensive knowledge and experience in the industry, Mr. Mydeen decided to his home country and incorporated CarClinic (First Branch) in Dindigul, TamilNadu in 2010 with two successful branches being operated in Dindigul, a third branch was founded in Chennai. Flourishing being in business for over 12 years, we have managed to become Chennai's fastest growing network of new age car repair workshops with over 5300 satisfied clients and counting.</p>
                    </div>
                </Col>
            </Row>
            {showButton && <Row>
                <Col>
                    <Button href="#/about-us">More About Us</Button>
                </Col>
            </Row>}
        </Container>
    )
}

export default AboutUsContainer;
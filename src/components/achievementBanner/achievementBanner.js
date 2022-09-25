import { Col, Container, Row } from "react-bootstrap";
import classes from "./achievementBanner.module.css";

const AchievementBanner = () => {
    return (
        <Container fluid className={classes['root']}>
            <Row className={classes['row']}>
                <Col md={3} sm={8}>
                    <img
                        alt="Expert Technicians"
                        className={classes['img-white']}
                        src="./icons/expertTechnicians.png"
                        height={"80px"}
                        width={"70px"}
                    />
                    <h2>25+</h2>
                    <p className={classes['content']}>Expert Technicians</p>
                </Col>
                <Col md={3} sm={8}>
                    <img
                        alt="Satisfied Client"
                        className={classes['img-white']}
                        src="./icons/satisfiedClient.png"
                        height={"80px"}
                        width={"70px"}
                    />
                    <h2>3,732+</h2>
                    <p className={classes['content']}>Satisfied Client</p>
                </Col>
                <Col md={3} sm={8}>
                    <img
                        alt="Years Experience"
                        className={classes['img-white']}
                        src="./icons/yearsExperience.png"
                        height={"80px"}
                        width={"80px"}
                    />
                    <h2>30+</h2>
                    <p className={classes['content']}>Years Experience</p>
                </Col>
                <Col md={3} sm={8}>
                    <img
                        alt="Complete Project"
                        className={classes['img-white']}
                        src="./icons/completedProject.png"
                        height={"80px"}
                        width={"150px"}
                    />
                    <h2>18,000+</h2>
                    <p className={classes['content']}>Complete Repairs/Services</p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <div style={{ color: 'white' }} className='d-block justify-content-center text-center'>
                    <img
                        alt="AIAWA MEMBERSHIP"
                        src="./aiawaLogo.png"
                        height={"90px"}
                        width={"190px"}
                        style={{filter: 'brightness(2)'}}
                    /> 
                    <p>Member of All India Automobile Workshops Association (AIAWA)</p>
                </div>
            </Row>
        </Container>
    );
}

export default AchievementBanner;
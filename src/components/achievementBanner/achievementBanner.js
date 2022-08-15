import { Col, Container, Row } from "react-bootstrap";
import classes from "./achievementBanner.module.css";

const AchievementBanner = () => {
    return (
        <Container fluid className={classes['root']}>
            <Row className={classes['row']}>
                <Col>
                    <img
                        alt="Expert Technicians"
                        className={classes['img-white']}
                        src="icons/expertTechnicians.png"
                        height={"70px"}
                        width={"70px"}
                    />
                    <h2>300+</h2>
                    <p className={classes['content']}>Expert Technicians</p>
                </Col>
                <Col>
                    <img
                        alt="Satisfied Client"
                        className={classes['img-white']}
                        src="icons/satisfiedClient.png"
                        height={"70px"}
                        width={"70px"}
                    />
                    <h2>1,026+</h2>
                    <p className={classes['content']}>Satisfied Client</p>
                </Col>
                <Col>
                    <img
                        alt="Years Experience"
                        className={classes['img-white']}
                        src="icons/yearsExperience.png"
                        height={"70px"}
                        width={"70px"}
                    />
                    <h2>25+</h2>
                    <p className={classes['content']}>Years Experience</p>
                </Col>
                <Col>
                    <img
                        alt="Complete Project"
                        className={classes['img-white']}
                        src="icons/completedProject.png"
                        height={"70px"}
                        width={"100px"}
                    />
                    <h2>3200+</h2>
                    <p className={classes['content']}>Complete Project</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AchievementBanner;
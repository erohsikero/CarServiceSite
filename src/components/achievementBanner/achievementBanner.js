import { Col, Container, Row } from "react-bootstrap";
import classes from "./achievementBanner.module.css";

const AchievementBanner = () => {
    return (
        <Container fluid className={classes['root']}>
            <Row className={classes['row']}>
                <Col>
                    <img
                        className={classes['img-white']}
                        src="icons/expertTechnicians.png"
                        height={"70px"}
                        width={"70px"}
                    />
                    <h2>300+</h2>
                    <p>Expert Technicians</p>
                </Col>
                <Col>
                    <img
                        className={classes['img-white']}
                        src="icons/satisfiedClient.png"
                        height={"70px"}
                        width={"70px"}
                    />
                    <h2>300+</h2>
                    <p>Expert Technicians</p>
                </Col>
                <Col>
                    <img
                        className={classes['img-white']}
                        src="icons/yearsExperience.png"
                        height={"70px"}
                        width={"70px"}
                    />
                    <h2>300+</h2>
                    <p>Expert Technicians</p>
                </Col>
                <Col>
                    <img
                        className={classes['img-white']}
                        src="icons/completedProject.png"
                        height={"70px"}
                        width={"100px"}
                    />
                    <h2>300+</h2>
                    <p>Expert Technicians</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AchievementBanner;
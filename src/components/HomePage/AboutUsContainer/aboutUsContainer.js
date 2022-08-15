import { Button, Col, Container, Row } from "react-bootstrap";
import classes from "./aboutUsContainer.module.css";

const AboutUsContainer = () => {
    return (
        <Container className={classes['container-fluid']}>
            <Row>
                <Col md={6} sm={16} xs={12}>
                    <div className={classes['about-img']}>
                        <img src="http://apeix.hellloexpert.com/wp-content/uploads/2019/07/about-us-1.png" alt="" />
                    </div>
                </Col>
                <Col md={6} sm={16} xs={12}>
                    <div className={classes['about-us-content']}>
                        <h2> We are Qualified &amp; Professional</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                        <div>
                            <div className={classes['icon']}>
                                <img
                                    src="icons/highQualityService.png"
                                    height={'40px'}
                                    width={'45px'}
                                    alt="High quality services"
                                >
                                </img>
                            </div>
                            <div className={classes['sub-content']}>
                                <h4>High Quality Service</h4>
                                <p>by injected humour, or randomised words which don't look even slightly believable If you are going</p>
                            </div>
                        </div>
                        <div>
                            <div className={classes['icon']}>
                                <img
                                    src="icons/bestPrice.png"
                                    height={'40px'}
                                    width={'45px'}
                                    alt="Best price in market"
                                ></img>
                            </div>
                            <div className={classes['sub-content']}>
                                <h4>Best Price in Market</h4>
                                <p>by injected humour, or randomised words which don't look even slightly believable If you are going</p>
                            </div>
                        </div>
                        <Button href="/about-us">More About Us</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUsContainer;
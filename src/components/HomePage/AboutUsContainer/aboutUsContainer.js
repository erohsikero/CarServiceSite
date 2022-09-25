import { Col, Container, Row } from "react-bootstrap";
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
                        <p>We are a team of skilled and passionate engineers who want to provide the best services to the customers. Our motto is to make car maintenance a simple and hassle-free experience for all car owners in India and Globally. We are guided by our core values and driven by our passion for being the best</p>
                        <div>
                            <div className={classes['icon']}>
                                <img
                                    src="./icons/highQualityService.png"
                                    height={'45px'}
                                    width={'45px'}
                                    alt="High quality services"
                                >
                                </img>
                            </div>
                            <div className={classes['sub-content']}>
                                <h4>High Quality Service</h4>
                                <p>We take carcare seriously and are committed to offering you the best quality services at an economical price. With use of genuine spare parts, an assured service warranty and our highly skilled technicians, we provide you the best car service experience.</p>
                            </div>
                        </div>
                        <div>
                            <div className={classes['icon']}>
                                <img
                                    src="./icons/bestPrice.png"
                                    height={'45px'}
                                    width={'45px'}
                                    alt="Best price in market"
                                ></img>
                            </div>
                            <div className={classes['sub-content']}>
                                <h4>Best Price in Market</h4>
                                <p>We provide Economical car servicing and repairs. Get savings up to 45% on car servicing and repairs.</p>
                            </div>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUsContainer;
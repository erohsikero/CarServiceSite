import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import classes from './homePageCarousel.module.css';

const HomePageCarousel = () => {
    return (
        <Carousel indicators={false} fade={true}>
            <Carousel.Item className={classes['carousel-item']}>
                <img
                    className="d-block w-100"
                    src="./slides/slide1.jpg"
                    alt="Slide One"
                />
                <Carousel.Caption className={classes['carousel-caption']}>
                    <h1>Multibrand Express Car Service</h1>
                    <p>We believe in providing top quality workmanship and are <br/>so confident in our level of service that we back it up <br/>with a good quality</p>
                    <Button href="/contact">Get in Touch</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={classes['carousel-item']}>
                <img
                    className="d-block w-100"
                    src="./slides/slide2.jpg"
                    alt="Slide Two"
                />
                <Carousel.Caption className={classes['carousel-caption']}>
                    <h1>Car Repair and Servicing</h1>
                    <p>Our specialized car repair &amp; maintenance services <br/> are tailor-made to suit the car maintenance requirements <br/>of the customers</p>
                    <Button href="/contact">Get in Touch</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomePageCarousel;
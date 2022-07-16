import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import classes from './homePageCarousel.module.css';

const HomePageCarousel = () => {
    return (
        <Container fluid>
            <Carousel indicators={false} fade={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.drsupercar.com/img/slider3.jpg"
                        alt="Slide One"
                    />
                    <Carousel.Caption className={classes['carousel-caption']}>
                        <h1>Label for first slide</h1>
                        <p>Sample Text for Image One</p>
                        <Button>Send a quote</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.drsupercar.com/img/slider2.jpg"
                        alt="Slide Two"
                    />
                    <Carousel.Caption className={classes['carousel-caption']}>
                        <h1>Label for second slide</h1>
                        <p>Sample Text for Image Two</p>
                        <Button>Send a quote</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.drsupercar.com/img/slider3.jpg"
                        alt="Slide Three"
                    />
                    <Carousel.Caption className={classes['carousel-caption']}>
                        <h1>Label for Third slide</h1>
                        <p>Sample Text for Image Three</p>
                        <Button>Send a quote</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default HomePageCarousel;
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import classes from './reviewpopup1.module.css';

const ReviewPopUp1 = () => {
    return (
        <div className={classes['carouselmain']}>
        <Carousel indicators={false} fade={true} >
            <Carousel.Item className={classes['carousel-item']}>
                <p>Thanks for *****, customer who are valued our services with EXCELLENT Rating</p>
            </Carousel.Item>
            <Carousel.Item className={classes['carousel-item']}>
                <p>Thanks for *****, customer who are valued our services with GOOD Rating</p>
            </Carousel.Item>
            <Carousel.Item className={classes['carousel-item']}>
                <p>Thanks for *****, customer who are valued our services with EXCELLENT Rating</p>
            </Carousel.Item>
        </Carousel>
                    <a href="#/customer-review"> View More Review </a>
        </div>

        
    );
}

export default ReviewPopUp1;
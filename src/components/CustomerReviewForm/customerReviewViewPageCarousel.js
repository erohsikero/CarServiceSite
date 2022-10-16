import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import classes from './customerReviewViewPage.module.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Item from "./Item";

  

const customerReviewViewPageCarousel = () => {
  return (
    <Carousel indicators={false} fade={true}>
            <Carousel.Item className={classes['carousel-item']}>
            <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={classes['carousel-item']}>
            <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Carousel.Item>

            <Carousel.Item className={classes['carousel-item']}>
            <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Carousel.Item>
    
    </Carousel>
  );
}


export default customerReviewViewPageCarousel;
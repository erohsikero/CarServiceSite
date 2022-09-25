import React from 'react'
import Card from '../Card/Card';
import MidHeaders from '../MidHeaders/MidHeaders';
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from './ourService.module.css';



function OurService() {
    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <MidHeaders head1='Our Services' head2='What We Offer for You' content1='CarClinic is Chennai’s fastest growing network of new age car repair workshops offering transparent, hassle-free and predictable car repair experience to car owners.' content2='We provides a wide range of services to the customers regarding car maintenance and repair services as listed below' />
            <Container fluid>
                <Row>
                    <Col className='mb-3'>
                        <Card titleData='General Service' iconValue='./icons/bestPrice.png' bodyData='Replace engine oil, replace filters, 4x4 break clean, wheel balancing & alignment, electrical check-up, A/C check-up & water wash' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Mechanical Service & Repair' iconValue='./icons/highQualityService.png' bodyData='Suspension replace, Break replace, Clutch replace, Timing belt kit replace, Engine over heat, Engine Hear over heat, Transmission O/H and all types of mechanical services' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Electrical Service & Repair' iconValue='./icons/battery.png' bodyData='Head light and Indicators replace & repair, Rate bite wiring, Horn replace, Wipers and all kinds of Electrical works.' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='A/C Service & Repair' iconValue='./icons/ac.png' bodyData='A/C gas leak check-up, A/C gas(134a) refilling & Top-up, A/C Compressor, Hoses Condensor, Colling oil replace and all kinds of A/C work.' height={'125'} width={'125'} />
                    </Col>
                </Row>
            </Container>
            <Button href="#/our-services">More OurService</Button>
        </div>
    )
}

export default OurService;

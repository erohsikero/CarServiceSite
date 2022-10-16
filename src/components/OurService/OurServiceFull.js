import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import MidHeaders from '../MidHeaders/MidHeaders';
import Banner from "../../components/Banner/banner";


function OurService() {
    return (
        <>
        <Banner activePageName={"Our Service"}/>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <MidHeaders head1='Our Services' head2='What We Offer for You' content1='CarClinic is Chennai’s fastest growing network of new age car repair workshops offering transparent, hassle-free and predictable car repair experience to car owners.' content2='We provides a wide range of services to the customers regarding car maintenance and repair services as listed below' />
            <Container fluid>
                <Row>
                    <Col className='mb-3'>
                        <Card titleData='General Service' iconValue='./icons/bestPrice.png' bodyData='Replace engine oil, replace filters, 4x4 break clean, wheel balancing & alignment, electrical check-up, A/C check-up & water wash' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Mechanical Service & Repair' iconValue='./icons/highQualityService.png' bodyData='Suspension replace, Break replace, Clutch replace, Timing belt kit replace, Engine over heat, Transmission O/H and all types of mechanical services' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Electrical Service & Repair' iconValue='./icons/battery.png' bodyData='Head light and Indicators replace & repair, Rat bite wiring, Horn replace, Wipers and all kinds of Electrical works.' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='A/C Service & Repair' iconValue='./icons/ac.png' bodyData='A/C gas leak check-up, A/C gas(134a) refilling & Top-up, A/C Compressor, Hoses Condensor, Colling oil replace and all kinds of A/C work.' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Body shop & Crash Repair' iconValue='./icons/crash.png' bodyData='Body parts replace, Scratch & dent removal, Corrosion patch work and all kinds of Tinkering & painting works(Original Metalic paint)' height={'125'} width={'230'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Car Spa & Detailing' iconValue='./icons/completedProject.png' bodyData='Interior and Exterior Body Wax and Rubbing polish, Interior trim form wash & polishing, A/C vent clean and all kinds of polishing.' height={'125'} width={'230'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Car Wash' iconValue='./icons/wash.png' bodyData='Interior clean & vacuum clean, Exterior form wash, Under chassis clean and all kinds of full body washing.' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Tyre & Wheel service' iconValue='./icons/tire.png' bodyData='All popular tyre brand tyres sales, Wheel Balancing, Tyre change, Wheel alignment(3D), Tubeless puncture.' height={'125'} width={'165'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Engine Diagnostics & Solutions' iconValue='./icons/turbo.png' bodyData='Multi brand scanner for all type of engine scanners & solutions, Key programming, Adoptions, Electrical device re-coding and EMC service & repair.' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='General Mechanical & Ele check-up' iconValue='./icons/ins.png' bodyData='30 points of mechanical & electrical health check-up and suggestion.' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Feedback & Follow-up' iconValue='./icons/bestPrice.png' bodyData='We have team to ask your valuable feedbacks often during and after service, to get suggestions/complaints to improve our services & regular follow-ups on vehicle service status to deliver it on time.' height={'125'} width={'125'} />
                    </Col>
                    <Col className='mb-3'>
                        <Card titleData='Pickup and Drop' iconValue='./icons/belt.png' bodyData='Within 5 KM radius, free pick-up and drop. For long distance applicable and affordable charges.' height={'125'} width={'125'} />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default OurService;

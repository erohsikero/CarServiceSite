import { Col, Container, Row } from "react-bootstrap"

const GoogleMap = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.99697352976!2d105.81945407598418!3d21.02269575409132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1453961383169" width="100%" height="450" frameborder="0" allowfullscreen="" title="location"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default GoogleMap;
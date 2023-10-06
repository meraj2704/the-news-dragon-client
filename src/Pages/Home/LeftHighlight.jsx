import React from 'react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import { Card, Col, Row } from 'react-bootstrap';

const LeftHighlight = () => {
    return (
        <div>
            <Row xs={1} md={1} className="g-4">
                    <Col >
                        <Card className='p-0'>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='p-0'>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='p-0'>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
};

export default LeftHighlight;
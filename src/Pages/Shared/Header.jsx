import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>left nav</Col>
                    <Col lg={6}>center</Col>
                    <Col lg={3}>right nav</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
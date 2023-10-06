import React from 'react';
import Header from '../Pages/Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav';
import RightNav from '../Pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';

const DetailsNewsLayout = () => {
    return (
        <div>
        <Header></Header>
        <Container>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default DetailsNewsLayout;
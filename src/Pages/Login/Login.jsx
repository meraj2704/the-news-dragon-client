import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Shared/Header';
import NavigationBar from '../Shared/NavigationBar';

const Login = () => {
    return (
        <div>
            {/* <NavigationBar></NavigationBar> */}
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <h3 className="text-center">Login</h3>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your username" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" block>
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
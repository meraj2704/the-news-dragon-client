import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Shared/Header';
import NavigationBar from '../Shared/NavigationBar';

const Login = () => {
    const handleCreateUser = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const userName = form.userName.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(firstName,lastName,email,userName,password,confirmPassword);
    }
    return (
        <div>
            {/* <NavigationBar></NavigationBar> */}
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <h3 className="text-center">Register</h3>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleCreateUser}>
                                    <Form.Group>
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" name="firstName" placeholder="First name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control type="text" name="lastName" placeholder="Last name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control type="text" name="userName" placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Confirm Password:</Form.Label>
                                        <Form.Control type="password" name="confirmPassword" placeholder="Password" />
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
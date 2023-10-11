import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Shared/Header';
import NavigationBar from '../Shared/NavigationBar';
import AuthProvider, { AuthContext } from '../../Providers/AuthProvider';
import { Result } from 'postcss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        setSuccess('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Successfully login account");
            })
            .catch(error => {
                console.log(error.message);
            })
            navigate("/categories/0");
    }
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
                                <Form onSubmit={handleSignIn}>
                                    <Form.Group>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter your username" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Enter your password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" block>
                                        Login
                                    </Button>
                                    {
                                        error && <p className='text-danger'>{error}</p>

                                    }
                                    {
                                        success && <p className='text-success'>{success}</p>
                                    }
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
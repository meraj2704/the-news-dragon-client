import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Shared/Header';
import NavigationBar from '../Shared/NavigationBar';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../Hook/hook';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [checked,setChecked]  = useState(false);
    const navigate = useNavigate();
    useTitle('Register')
    const { createUser,updateUserProfile} = useContext(AuthContext)
    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const mainName = firstName+ " " +lastName;
        const email = form.email.value;
        const url = form.photoUrl.value;
        const userName = form.userName.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(mainName, email, userName, password, confirmPassword);
        setError('');
        setSuccess('');
        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser)
                    setSuccess("Successfully registered account");
                })
                .catch(error => {
                    console.log(error.message)
                })

                updateUserProfile(mainName,url)
                .then(result =>{
                    const user = result.user;
                    console.log(user);
                })
                .catch(error =>{
                    console.log(error.message)
                })
                navigate("/categories/0");

        }
        else {
            setError("Password not matching.")
        }

        console.log(firstName, lastName, email, userName, password, confirmPassword);
    }
    const handleChecked = event =>{
        setChecked(event.target.checked);
        console.log(checked);
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
                                        <Form.Label>Photo url:</Form.Label>
                                        <Form.Control type="text" name="photoUrl" placeholder="Photo Url" />
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
                                    <Form.Group onClick={handleChecked}>
                                        
                                        <Form.Check className='ps-0 text-start' type="checkbox" name="accept" label={<><p>Accept <Link to='/terms'>Terms and conditions</Link></p></>} />
                                    </Form.Group>
                                    <Button className='mt-2' disabled={!checked} variant="primary" type="submit" block>
                                        Submit
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
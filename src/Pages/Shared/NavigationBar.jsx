import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 
import { AuthContext } from '../../Providers/AuthProvider';


const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex">
                            <Link to="/categories/0" className='text-black fw-bold text-decoration-none pe-2'>Home</Link>
                            <Link to="/" className='text-black fw-bold text-decoration-none pe-2'>About</Link>
                            <Link to="/" className='text-black fw-bold text-decoration-none'>Carrer</Link>
                        </Nav>
                        <Nav>
                            {user ?
                                <div className='d-flex align-items-center'>
                                    <Link to="profile"><FaUserCircle style={{ fontSize: '41px' }}></FaUserCircle></Link>
                                    <Button className='ms-3' variant="danger">Logout</Button>
                                </div>
                                :
                                <div>
                                    <Link to= 'login'><Button  variant="secondary">Login</Button></Link>
                                    <Link to='register'><Button className='ms-3' variant="secondary">Register</Button></Link>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
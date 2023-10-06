import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={100} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                    ..............I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><Link to="/" className='text-black fw-bold text-decoration-none'>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user ?
                                <div className='d-flex'>
                                    <Nav.Link to><Link to="profile"><FaUserCircle style={{ fontSize: '41px' }}></FaUserCircle></Link> </Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <Button variant="danger">Logout</Button>
                                    </Nav.Link></div> :
                                <div>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <Button variant="secondary">Login</Button>
                                    </Nav.Link><Nav.Link eventKey={2} href="#memes">
                                        <Button variant="secondary">Register</Button>
                                    </Nav.Link>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
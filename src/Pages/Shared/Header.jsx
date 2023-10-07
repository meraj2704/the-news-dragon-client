import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import NavigationBar from './NavigationBar';


const Header = () => {
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
            <NavigationBar></NavigationBar>
        </Container>
    );
};

export default Header;
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div className='mb-3'>
                <Button className='mb-2' variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login with GitHub</Button>
            </div>
            <div>
                <h4>Find Us</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebookF></FaFacebookF> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;
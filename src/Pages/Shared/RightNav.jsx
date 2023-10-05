import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';
import backgroundImage from '../../assets/bg.png'
const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',

}


const RightNav = () => {
    return (
        <div>
            <h4 className='text-start mb-4'>Login With</h4>
            <div className='mb-3 w-auto'>
                <Button className='mb-2 w-full' variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login with GitHub</Button>
            </div>
            <div className='mb-3 text-start'>
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
            <div style={backgroundStyle} className='px-4 py-5 text-white mt-3'>
                <h3 className='mb-3'>Create an <br /> Amazing <br /> Newspaper</h3>
                <p className='mb-3'>Discover thousands of options easy to customize layouts one click to import demo and much more</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;
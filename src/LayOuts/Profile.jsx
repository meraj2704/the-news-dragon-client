import React from 'react';
import Header from '../Pages/Shared/Header';
import { Button, Card } from 'react-bootstrap';

const Profile = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-4 d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Name: </Card.Title>
                        <Card.Text>
                           <p>Email : </p>
                           <p>Number : </p>
                           <p>Address : </p>
                           <p>Skills : </p>
                        </Card.Text>
                        <Button variant="danger">Logout</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
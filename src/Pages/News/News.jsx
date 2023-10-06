import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const News = () => {
    const newsDetails = useLoaderData();
    const { _id, details, image_url, title, category_id } = newsDetails;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='ps-0 pe-0'>
                    <Card.Title className='text-start'>{title}</Card.Title>
                    <Card.Text className='text-start'>
                        {details}
                    </Card.Text>
                    <Container className='text-start ps-0'>
                        <Link to={`/category/${category_id}`} ><Button variant="danger">All news ins this category</Button></Link></Container>
                </Card.Body>
            </Card>
           <div className='mt-4'>
            <h3 className='ps-4 text-start'>Editor Insight</h3>
           <CardGroup className='mt-4'>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body className='ps-0 pe-0'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body className='ps-0 pe-0'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='text-start'>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body className='ps-0 pe-0'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='text-start'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
           </div>
        </div>
    );
};

export default News;
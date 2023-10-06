import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const newsDetails = useLoaderData();
    const { _id, details, image_url, title,category_id} = newsDetails;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body className='ps-0 pe-0'>
          <Card.Title className='text-start'>{title}</Card.Title>
          <Card.Text className='text-start'>
           {details}
          </Card.Text>
         <Container className='text-start ps-0'>
         <Link to={`/category/${category_id}`} ><Button  variant="danger">All news ins this category</Button></Link></Container> 
        </Card.Body>
      </Card>
    );
};

export default News;
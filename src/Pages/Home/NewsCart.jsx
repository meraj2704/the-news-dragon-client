import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt,FaRegStar,FaStar, FaRegEye } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCart = ({ news }) => {
    const { _id, details, image_url, title, author,rating,total_view } = news;
    return (
        <div>
            <Card className="text-start mb-4">
                <Card.Header className=' align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                        <div className='flex-grow-1 ms-2'>
                            <p className='mb-0'>{author.name}</p>
                            <p className='mb-0'>{moment(author.published_date).format('MM Do YYYY')}</p>
                        </div>
                        <div>
                            <FaBookmark /> <FaShareAlt></FaShareAlt>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} ...<Link to={`/news/${_id}`} className='text-danger'>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex '>
                        <Rating>
                            readonly
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            <FaRegStar></FaRegStar>
                        </Rating>
                        <p className='aligned-flex-item mb-0 mt-1 ps-2 flex-grow-1'>{rating.number}</p>
                        <div className='d-flex align-items-center'>
                            <FaRegEye></FaRegEye> <span className='ms-2'>{total_view}</span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;
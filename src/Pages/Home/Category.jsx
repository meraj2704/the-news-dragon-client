import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from './NewsCart';
import useTitle from '../../Hook/hook';

const Category = () => {
    useTitle('Home')
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h3>Here have : {categoryNews.length}</h3>
            {
                categoryNews.map(news=><NewsCart
                key={news._id}
                news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;
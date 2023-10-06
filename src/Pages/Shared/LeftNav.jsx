import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftHighlight from '../Home/LeftHighlight';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4 className='text-start mb-4'>All Categories</h4>
            <h5 className='bg-secondary pt-3 pb-3 text-white'>National News</h5>
            <div className='ps-5 text-start'>
                {
                    categories.map(cat => <p  key={cat.id}> 
                        <Link to={`/category/${cat.id}`} className='text-decoration-none text-black hover'>{cat.name}</Link>
                    </p>)
                }
            </div>
            <LeftHighlight></LeftHighlight>
        </div>
    );
};

export default LeftNav;
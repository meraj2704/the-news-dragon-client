import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4 className='text-start mb-4'>All Categories</h4>
            <h5>National News</h5>
            <div className='ps-5 text-start'>
                {
                    categories.map(cat => <p  key={cat.id}> 
                        <Link to={`/category/${cat.id}`} className='text-decoration-none text-black'>{cat.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
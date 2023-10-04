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
            <h4>All Categories</h4>
            <h5>National News</h5>
            <div className=' '>
                {
                    categories.map(cat => <p  key={cat.id}>
                        <Link className='text-decoration-none text-black'>{cat.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
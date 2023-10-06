import React from 'react';
import { Outlet } from 'react-router-dom';

const DetailsNewsLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default DetailsNewsLayout;
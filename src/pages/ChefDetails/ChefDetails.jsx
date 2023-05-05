
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const ChefBio = useLoaderData();
   
    return (
        <div className='container mt-5 py-5'>
            <h2>chef Complete Details {ChefBio.id}</h2>
        </div>
    );
};

export default ChefDetails;
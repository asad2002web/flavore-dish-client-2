/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import ChefCards from '../../Shared/ChefCards/ChefCards';
import { useLoaderData } from 'react-router-dom';
import ImageGllary from './ImageGllary';

const Home = () => {
    const chef = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ChefCards chef ={chef}></ChefCards>
            <ImageGllary></ImageGllary>
        </div>
    );
};

export default Home;
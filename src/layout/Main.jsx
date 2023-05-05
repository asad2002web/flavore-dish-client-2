import React from 'react';
import Navber from '../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
                <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />

        </div>
    );
};

export default Main;
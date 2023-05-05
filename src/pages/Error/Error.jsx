/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from "../../assets/error.jpg"

const Error = () => {
  return (
    <div className="container text-center my-5">
      <img src={errorPic} alt="Error" className="img-fluid mb-3 w-50" />
      <h2>Oops! Something went wrong.</h2>
      <p>We are sorry, but the page you are looking for could not be found.</p>
      <Link to="/"><button style={{background:"#00a90b"}} className=' text-white rounded-2 py-2 px-3 fw-bold'>Go to Home</button></Link>
    </div>
  );
};

export default Error;

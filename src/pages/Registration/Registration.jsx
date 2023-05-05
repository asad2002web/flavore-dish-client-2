/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import loginImage from "../../assets/register.webp"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Registration = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const  navigate = useNavigate()
    
    const {createUser, loginWithGoogle, loginWithGithub} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        setSuccess("")
        setError("")
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value
        console.log(name, password, email, photo);

        if(password.length < 6){
            setError('Password not vaild need 6 cheracters')
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate("/")
            setSuccess("Registration is successfully completed")
        })
        .catch(error => {
            setError(error.message);
        })
    }
    const handleGoogleSignUp = () => {
        loginWithGoogle()
            .then(result => {
                const loggedGoogle = result.user
                console.log(loggedGoogle);
                navigate("/")
                setSuccess("Google Registration is successfully completed")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithubSignIn = () =>{
        loginWithGithub()
        .then(result => {
            const loggedGithub = result.user
            console.log(loggedGithub);
            navigate("/")
            setSuccess("Github Registration is successfully completed")
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='container mt-5 py-5 w-75'>
            <h2 className='text-center fw-bold pb-3'>Register Now</h2>
            <div className=' row d-flex justify-content-between'>
                <form onSubmit={handleRegister} className='border border-2 p-4 rounded-4 col-sm-12 col-lg-6'>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Name</label>
                        <input type="text" name="name" placeholder='Write your name here' className="form-control" required id="exampleInputPassword1" />
                    </div>
                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" name="email" placeholder='Write your email here'  className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" name="password" placeholder='Write your password here' className="form-control" required id="exampleInputPassword1" />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Photo URL</label>
                        <input type="url" name="photo" placeholder='Write your Photo URL here' className="form-control" required id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <p className='text-danger text-center fw-bold'>{error}</p>
                    <p className='text-success text-center fw-bold'>{success}</p>
                    <button style={{background:"#00a90b"}} className='form-control text-white rounded-2 py-2 px-3 fw-bold'>Submit</button>
                    <div className='d-flex justify-content-center align-items-center pt-2'>
                        <p>--------------- </p><h4 className='pb-2'>&ensp; or &ensp;</h4><p> ---------------</p>
                    </div>
                    <div className='text-center'>
                        <button onClick={handleGoogleSignUp} className='p-3 fs-2 bg-white border-0'><FaGoogle></FaGoogle></button>
                        <button onClick={handleGithubSignIn} className='p-3 fs-2 bg-white border-0'><FaGithub></FaGithub></button>
                    </div>
                    <p className='text-center pt-3 mb-0 '>Already have an account ? <Link to="/login" className='text-decoration-underline fw-bold'>Login Now</Link></p>
                </form>
                <img className='col-sm-12 col-lg-6' src={loginImage}></img>
            </div>
        </div>
    );
};

export default Registration;
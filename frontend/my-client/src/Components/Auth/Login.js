import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../Context/alert/alertContext';
import AuthContext from '../../Context/auth/authContext';
import GoogleAuth from './SocialMediaAuth/GoogleAuth';

import LoginImage from '../designComponents/LoginImage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    let navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard")
        }
        if (error === 'Invalid credentials') {
            setAlert(error, 'text-red-700');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, navigate]);


    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    //destructure inputs
    const { email, password } = user;

    //this function listens on login input value and updates the state
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    //this function listens on submit button
    const onSubmit = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setAlert('Please fill out all the fields', 'text-red-700')
        } else {
            login({
                email,
                password
            });
        }
    }

    return (

        <div>
            <div className=' flex flex-col justify-center items-center  '>
                <div className='mt-6 text-2xl text-center font-semibol  text-gray-700 text-3xl font-bold'>
                    <h1 >Login</h1>
                </div>
                <div className='text-sm w-2/4 mx-auto md:text-lg w-4/5 text-gray-800 text-base mt-6 my-12 '>
                    <h3>Almost there!  Please fill out the information bellow!</h3>
                </div>
            </div>
            <div className='bg-gray-50 p-8'>
                <div className='container mx-auto'>


                    <form onSubmit={onSubmit}>

                        <div className="flex flex-col md:flex-row" >
                            <LoginImage />

                            <div className='flex flex-col bg-blue-300 py-6 p-6  font-bold items-center w-full lg:w-2/4'>

                                <label htmlFor='email' className="text-white text-lg mt-6 my-4" >Email</label>
                                <div>
                                    <input className="p-2 w-2/3" type="email" name="email" id="email" value={email} onChange={onChange} />
                                </div>
                                <label htmlFor='password' className='text-white text-lg mt-6 my-4'>Password</label>

                                <div className='flex items-center justify-end'>
                                    <input className="p-2 w-2/3 relative" type="password" name="password" id="user_password" value={password} onChange={onChange} />
                                    <FontAwesomeIcon icon={faLock} className="absolute p-6 text-gray-400 " />
                                </div>

                            </div>

                        </div>
                        <div className='mt-12 flex flex-col text-xl font-medium justify-center'>
                            <input type="submit" className="w-2/3 inline-flex items-center justify-center px-4 my-6 py-2 bg-blue-300 border border-transparent rounded-md  capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-100 disabled:opacity-25 transition lg:w-full mx-auto " value="LOGIN" />
                        </div>
                    </form>

                </div>

                <GoogleAuth />
            </div>
        </div>

    )

};
export default Login;
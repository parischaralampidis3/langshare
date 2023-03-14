import React, { useState, useContext } from 'react';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import AuthContext from "../Context/auth/authContext"

const  Navigation = () => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = ()=>{
        logout();
    }


    const navigation = [
        { link: '/', text: 'Main Page' },
   

    ];
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)


    const authLinks = (
      
        <div className="container mx-auto"> 

        <div className="flex justify-center  list-none">


        <div className=' flex items-center text-white px-12'>

<li >
    <a href="/dashboard">
        <span>Profile</span>
    </a>
</li>

</div>


    


           <div className=' flex items-center text-gray-700 px-12'>

        <li >
            <a href="/dashboard">

                <FontAwesomeIcon icon={faUser} className="text-xl mr-2"/>
                <span>Profile</span>
            </a>
        </li>
        
        </div>
        
        
        
    <div className='flex items-center relative '>
        <li className='md:text-base lg: mx-8  border border-indigo-600 p-2  drop-shadow-md rounded-full bg-white font-bold text-bold text-lg '>
        Hello, {user && user.username}
        </li>
            
            <a onClick={onLogout} href="#" >
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-xl absolute -mt-6 p-6 text-gray-700 " />
           
           <span className='mx-12'>Logout</span>
            </a>
        </div>
        
        </div>
        </div>
    )


    const guestLinks = (
         <div className="hidden md:flex  block">  
                       <div>
                        <button className="bg-blue-600 font-medium text-white rounded-md py-2  px-6">
                          <a href="./register"> Register</a>
                        </button>
                    </div>

                    <div >
                        <button className="bg-blue-600 font-medium text-white rounded-md py-2 mx-12 px-6">
                          <a href="./login">Login</a>
                        </button>
                    </div>
                  
                    </div>
    )

    return (
        <div className="bg-blue-200">
            <div className="container mx-auto">


                <nav className='flex  justify-between py-4'>
                    
                    <ul>
                        <li><a className="text-2xl font-bold text-gray-900" href="/">Home</a></li>
                    </ul>

                    <ul className='hidden md:flex block menu-links'>
                        {navigation.map((nav) => (
                            <li className='font-medium text-gray-700 ml-12  hover: text-gray-900 text-lg' key={nav.text}>
                                <a href={nav.link} onClick={toggle}>{nav.text}</a>
                            </li>
                        ))}
                    </ul>
                <div className="hidden md:flex  block">  
            
                    {isAuthenticated?authLinks:guestLinks}
                    </div>
               



                    <div onClick={toggle}>
                        <Hamburger />
                    </div>

                </nav>

                {open && <MobileMenu />}

            </div>
        </div>
    )
}

export default Navigation;
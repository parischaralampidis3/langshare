import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import AuthContext from '../Context/auth/authContext';

function MobileMenu() {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }

    const navigation = [
        { link: '#', text: 'Link 1' },

    ];

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    const authLinks = (
        <div className="flex flex-col list-none mx-auto">
        <li className='md:text-base lg:text-bold text-lg'>
        Hello, {user && user.username}
        </li>
            
            <div >
            <a className='flex items-center justify-between my-6' onClick={onLogout} href="#" >
                <FontAwesomeIcon  icon={faArrowRightFromBracket}className="text-xl absolute -mt-0 p-4 text-gray-700"
   />
                <span className='mx-12'>Logout</span>
            </a>
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
        <div className="bg-blue-200 py-6 md:hidden">
            <div className="container mx-auto">
                <ul className='block flex flex-col text-center md:hidden '>
                    {navigation.map((nav) => (
                        <li className='my-4 mx-8 font-medium text-gray-600  hover: text-gray-900 text-lg' key={nav.text}>
                          <a href={nav.link} onClick={toggle}>{nav.text}</a>
                        </li>
                    ))}
                </ul>
                <hr />

                <div className=" flex  block">  
            
            {isAuthenticated?authLinks:guestLinks}
            </div>
       



           


         
            </div>

        </div>
    )
}

export default MobileMenu;
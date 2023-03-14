import React from 'react';
import { signInWithGoogle } from '../Firebase/firebase';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const GoogleAuth = () => {


    return (
        <div className='container mx-auto'>
            <div className='text-center font-bold my-5'>
                <hr />
                <h1 className='my-2'>OR</h1>
            </div>
            <div className=''>
                <button onClick={signInWithGoogle} type="button" className="w-full inline-block px-6 py-2 border-2 border-red-500 text-red-500 font-medium text-base leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                     Sign in with  Google<FontAwesomeIcon icon={faGoogle} className='text-blue-700 px-2 text-xl text-red-500 ' />
                </button>


            </div>
        </div>
    )
}

export default GoogleAuth;






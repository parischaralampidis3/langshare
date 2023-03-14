import React, { useContext, useEffect } from 'react'
import AuthContext from '../Context/auth/authContext';
import Greeting from '../Components/Greeting';
import Logo from "../Components/designComponents/Logo";

const Home = () => {

    const authContext = useContext(AuthContext)
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])
    return (

        <div className="container mx-auto">

            <div className='flex w-full h-screen'>
            <div className='h-2/4'>

                <div className='mt-6  bg-gray-100 drop-shadow-lg '>
                    <Greeting />
                </div>

                <div className='mt-6  bg-gray-100 drop-shadow-lg h-4/5 w-5/5'>
                    <Logo />
  
                </div>

            </div>



           

        </div>
        </div>
    )
}


export default Home;




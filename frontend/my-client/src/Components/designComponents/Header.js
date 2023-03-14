import React from 'react';


const Header = () => {
    return (
        <div className=" w-full mt-12 ">

            <div className="container mx-auto">
                <div className='flex flex-col items-center md:flex-row '>
                    <img className=' w-4/5 md:w-2/4 lg:w-2/5 p-8' src='./assets/images/lang_jumbotron.png' alt="jumbotron image" />
                    <div className="bg-blue-300 w-4/5 md:w-2/4 lg:2/5 p-8">
                        <div className='text-4xl w-3/5 mx-auto mt-12'>
                            <h1 className="text-white tracking-wide font-bold text-xl md:text-lg lg:text-2xl xl:text-4xl ">Great <span className='text-yellow-200'>Online</span> Educational That Simplifies Teaching Process. </h1>
                        </div>
                         <div className='bg-yellow-300 mt-12 mx-28 text-lg w-1/3 hover:bg-yellow-500 text-xl text-white font-bold py-2 px-4 rounded'>Learn More</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;
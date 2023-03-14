import React,{useContext, useEffect} from 'react';
import AuthContext from '../Context/auth/authContext';


export const About = () => {
  const authContext = useContext(AuthContext)
  useEffect(()=>{
      authContext.loadUser();
      //eslint-disable-next-line
  },[])



  return( 
  <div className='container mx-auto'>
      <div className='text-3xl font-bold text-left text-gray-700'>
      <h1>About</h1>
      </div>
      <div className='text-lg text-gray-500 my-6'>
          <h3>Langbox app is made by Paris Charalampidis</h3>
      </div>
        <div className="text-base">
       <p>This is an app that improves educational experience both of teacher and student.</p>
      <p className='text-sm text-blue-300 my-6'>version 0.01</p>
        </div>
      
</div>
  )
};

export default About

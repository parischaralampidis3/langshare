import React,{useState,useEffect,useContext} from 'react';
import Avatar from 'react-avatar';
import AuthContext from '../../Context/auth/authContext';
const  Logo = ()=> {

    const authContext = useContext(AuthContext);
    const {user} = authContext;

    useEffect(()=>{
        authContext.loadUser();
        //eslint-disable-next-lineContext.loadUser();

    },[]);

    return (
    <div className='flex py-8 justify-center'>
        
           
                <Avatar  color={Avatar.getRandomColor('sitebase', ['yellow', 'red', 'green'])} name={user && user.username}  size='90px' round={true}/>


                
         
    </div>
  )
}

export default Logo;

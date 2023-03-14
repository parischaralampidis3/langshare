import React, {useContext, useEffect} from 'react';
import AuthContext from '../Context/auth/authContext';
import Header from "../Components/designComponents/Header"

 const Home = () => {

  const authContext = useContext(AuthContext)
  useEffect(()=>{
      authContext.loadUser();
      //eslint-disable-next-line
  },[])

    return (

    <div className="container mx-auto"> 
      <Header/>
     
      <h1>hello world</h1>
      </div>
  )
}
export default Home;
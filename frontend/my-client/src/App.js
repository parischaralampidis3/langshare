import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import{auth} from './Components/Auth/firebase/firebase.utils';
//import {useAuthState} from "react-firebase-hooks/auth";
import Navigation from "./Layout/Navigation";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Home from "./Pages/Home"
import Footer from "./Components/designComponents/Footer";
import Dashboard from "./Pages/Dashboard";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login"
import Alerts from "./Layout/Alerts/Alerts";

import Loading from "./Layout/Loading";

import About from "./Pages/About";


import './App.css';
import "./styles/tailwind.css";

import AuthState from "./Context/auth/AuthState";
import AlertState from "./Context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";




if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {

  // const [user] = useAuthState(auth);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return <div>{loading ? <Loading/> :

    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navigation />
            <div>
              <div className="flex justify-center my-6">
                <Alerts />
                <Routes>
                             <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      
                      </PrivateRoute>
                    }
                  />
                  <Route exact path ="/dashboard" element ={ <Dashboard/>}/>
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path ="/" element = {<Home/>}/>
                </Routes>


              </div>

                <Footer/>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>}

  </div>;




}

export default App;










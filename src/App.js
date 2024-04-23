import React from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css';

import imag1 from './Components/Images/posts/img10.jpg'



import Home from "./Components/Home"


import FormLogin from './Components/FormLogin';
import FormSignup from './Components/FormSignup';
import ProfilePage from './Components/ProfilePage';


const App = () => {

 
  return (
    <div >
      <img src={imag1} alt="" className='w-100 ' />
     

       <>
      
      <HashRouter>
          <Routes>
                <Route
                   exact
                   path="/"
                   element={<FormLogin />}
               />
              
               <Route
                    path="/Home"
                    element={<Home />}
                />

                <Route
                    path="/Profile"
                    element={<ProfilePage />}
                />
               
               
               <Route
                    path='/FormLogin'
                    element={<FormLogin />}
                />
                <Route
                    path='/FormSignup'
                    element={<FormSignup/>}
                />
              
                
                
          </Routes>
      </HashRouter>
  </>
 



    </div>
  )
}

export default App
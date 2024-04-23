import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css';





import Home from "./Components/Home"


import FormLogin from './Components/FormLogin';
import FormSignup from './Components/FormSignup';
import ProfilePage from './Components/ProfilePage';


const App = () => {

 
  return (
    <div >
     

       <>
      
      <Router>
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
      </Router>
  </>
 



    </div>
  )
}

export default App
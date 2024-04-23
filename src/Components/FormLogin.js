import React from 'react'
import './FormLogin.css'
import UseHooks from '../Hooks/UseHooks';

const FormLogin = () => {
  const {handleSubmit,signUp}=UseHooks();
  return (
    <div className='container d-flex justify-content-center align-items-center'>
        <div className="form d-flex flex-column  align-items-center border-bottom-secondary ">
            <p className="text fw-bold fs-2 text-light  m-4">Login</p>
            <div class="input-group  align-items-center   ">

                <input type="text" className="form-control bg-transparent text-white border-0 "
                placeholder='Username' 
                 id='username'/>
                <span class="input-group-text   bg-transparent border-0"><i class="bi bi-person-fill text-white fs-6 "></i></span>
            </div>
            <div class="input-group align-items-center    ">
        
                <input type="password" className="form-control bg-transparent  text-white  border-0"
                placeholder='Password'
                id='password'/>
                <span class="input-group-text  bg-transparent border-0"><i class="bi bi-lock-fill text-white fs-6 "></i></span>
             </div>
            <button className='btn btn-info text-light rounded-pill w-50  fw-medium fs-4' onClick={handleSubmit}>Login</button>
            <p className="text-white fw-medium mt-4 ">Don't have an account Sign Up <a href="" onClick={signUp} className='text-info'>here</a></p>
        </div>


    </div>
  )
}

export default FormLogin
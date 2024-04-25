import React from 'react'
import './FormLogin.css'
import UseHooks from '../Hooks/UseHooks';
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
  const {handleSubmit,handleChange,handleSubmit1,errors,value}=UseHooks();
  const navigate1=useNavigate()

  
  return (
    <div className='container d-flex justify-content-center align-items-center'>
        <div className="form d-flex flex-column  align-items-center border-bottom-secondary ">
            <p className="text fw-bold fs-2 text-light  m-4">Login</p>
            <div class="input-group  align-items-center   ">
        
                <input type="email" className="form-control bg-transparent text-white border-0 "
                placeholder='Email' 
                 id='email'
                 name='email'
                 onChange={handleChange}
                 value={value.email}
                 />
                <span class="input-group-text   bg-transparent border-0"><i class="bi bi-person-fill text-white fs-6 "></i></span>
                
                
                
               
            </div>
            {errors.email && <p className='text text-white border border-danger fs-6 '>{errors.email}</p>}
            <div class="input-group align-items-center    ">
        
                <input type="password" className="form-control bg-transparent  text-white  border-0"
                placeholder='Password'
                id='password'
                name='password'
                onChange={handleChange}
                value={value.password}
                />
                <span class="input-group-text  bg-transparent border-0"><i class="bi bi-lock-fill text-white fs-6 "></i></span>
                <hr />
             </div>
             {errors.password && <p  className='text text-white border border-danger fs-6 '>{errors.password}</p>}

            <button className='btn btn-info text-light rounded-pill w-50  fw-medium fs-4' onClick={handleSubmit1}>Login</button>
            <p className="text-white fw-medium mt-4 ">Don't have an account Sign Up <a href="" className='text-info' >here</a></p>
        </div>


    </div>
  )
}

export default FormLogin
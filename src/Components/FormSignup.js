import React from 'react'
import UseHooks from '../Hooks/UseHooks';

const FormSignup = () => {
  const {handleSubmit,login}=UseHooks();
  return (
    <div className='container d-flex justify-content-center align-items-center'>
    <div className="form d-flex flex-column  align-items-center border-bottom-secondary ">
        <p className="text fw-bold fs-2 text-light  ">Sign Up</p>
        <div class="input-group  align-items-center   ">
         
            <input type="text" className="form-control bg-transparent text-white border-0 "
            placeholder='Username' 
             id='username'/>
            <span class="input-group-text   bg-transparent border-0"><i class="bi bi-person-fill text-white fs-6 "></i></span>
        </div>
        <div class="input-group align-items-center    ">
        
            <input type="email" className="form-control bg-transparent  text-white  border-0"
            placeholder='Email'
            id='email'/>
            <span class="input-group-text  bg-transparent border-0"><i class="bi bi-envelope text-white fs-6"></i></span>
         </div>
         <div class="input-group align-items-center    ">

            <input type="password" className="form-control bg-transparent  text-white  border-0"
            placeholder='Password'
            id='password'/>
            <span class="input-group-text  bg-transparent border-0"><i class="lock bi bi-lock-fill text-white fs-6 "></i></span>
         </div>
         <div class="input-group align-items-center    ">
 
            <input type="password" className="form-control bg-transparent  text-white  border-0"
            placeholder='Conform Password'
            id='Cpassword'/>
            <span class="input-group-text  bg-transparent border-0"><i class="bi bi-lock-fill text-white fs-6 "></i></span>
         </div>
        <button className='btn btn-info text-light rounded-pill w-50  fw-medium fs-4' onClick={handleSubmit}>Sign Up</button>
        <p className="text-white fw-medium mt-4 ">Already have an account login <a href="" onClick={login} className='text-info'>here</a></p>
    </div>


</div>
  )
}

export default FormSignup
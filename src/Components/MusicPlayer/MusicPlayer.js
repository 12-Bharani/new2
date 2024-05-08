import React, { useState } from 'react'
import './MusicPlayer.css'
import Menu from './Menu'
import MusicData from './MusicData'
import UseHooks from '../../Hooks/UseHooks'




const MusicPlayer = () => {
  const{musicList}=MusicData()
  const {home,profile}=UseHooks();

 
  
  return (
    <div className='container-fluid bg-light w-100' id='audio-main'>
      <div className="container-fluid bg-light " id='musicAppContent'>
        <div className="row d-flex w-100 justify-content-center ms-2 align-items-center">
            <div className="col-12 d-flex bg-secondary w-100 justify-content-center align-items-center">
              <p className='text-light fw-medium fs-3 bg-secondary align-items-center d-flex justify-content-center w-100 m-0 p-0'>Music Player</p>
              <button className="btn btn-dark w-25 border-0"></button>
              <button className="y btn btn-white d-flex  border-bottom-0 w-100 justify-content-center align-items-center dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false "  >
              <i class="bi bi-list m-0 p-0  text-light"></i>
                      </button>
                      <ul class="dropdown-menu">
                                           <li>
                                           
                                              <button className="p btn btn-info w-100 d-flex align-items-center justify-content-center"  id='img1'onClick={home}>
                                              <i className="bi bi-house  text-dark "></i>
                                               <span className='text-dark ms-2 d-none d-xl-block' >Home</span> 
                                             </button>
                                           
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100 d-flex align-items-center justify-content-center"  id='img2'  onClick={profile}>
                                             <i class="bi bi-person-circle text-dark"></i>
                                             <span className='text-dark ms-2 d-none d-xl-block' >Profile</span> 
                                                </button>
                                           </li>
                                        
                                           
                                         </ul>
             
            </div>
          
        </div>
        <div className="content ">
         <Menu />
    

         </div>
        </div>


      </div>
    
  )
}

export default MusicPlayer
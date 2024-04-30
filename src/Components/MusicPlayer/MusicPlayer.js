import React, { useState } from 'react'
import './MusicPlayer.css'
import Menu from './Menu'
import MusicData from './MusicData'




const MusicPlayer = () => {
  const{musicList}=MusicData()

 
  
  return (
    <div className='container-fluid bg-light w-100' id='audio-main'>
      <div className="container-fluid bg-light " id='musicAppContent'>
        <div className="row d-flex w-100 justify-content-center ms-2 align-items-center">
            <div className="col-12 d-flex bg-secondary w-100 justify-content-center align-items-center">
              <p className='text-light fw-medium fs-3 bg-secondary align-items-center d-flex justify-content-center w-100 m-0 p-0'>Music Player</p>
              <button className="btn btn-dark w-25 border-0"><i class="bi bi-house-fill m-0 p-0  text-light"></i></button>
             
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
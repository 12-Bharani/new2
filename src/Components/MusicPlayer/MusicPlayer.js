import React, { useState } from 'react'
import './MusicPlayer.css'
import Menu from './Menu'
import MusicData from './MusicData'




const MusicPlayer = () => {
  const{musicList}=MusicData()
  const [isSongs,setIsSongs] = useState(true)
 
  
  return (
    <div className='container-fluid' id='audio-main'>
      <div className="container-fluid  " id='musicAppContent'>
        <div className="row d-flex w-100 align-items-center">
            <div className="col-12 d-flex flex-column w-100 align-items-center">
              <p className='text fw-medium fs-3 bg-white align-items-center d-flex justify-content-center w-100'>Music Player</p>
         
             
            </div>
          
        </div>
        <div className="content ">
         <Menu 
         isSongs={isSongs}
         setIsSongs={setIsSongs}
        

         />
    

         </div>
        </div>


      </div>
    
  )
}

export default MusicPlayer
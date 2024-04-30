import React, { useState,useEffect } from 'react'
import './Menu.css'
import MusicData from './MusicData';
import song3 from '../MusicPlayer/Music/Naa-Ready.mp3'
import song1 from '../MusicPlayer/Music/Arjunar-Villu.mp3'
import song4 from '../MusicPlayer/Music/Vaadi-Vaadi.mp3'
import song2 from '../MusicPlayer/Music/Kokkarakko.mp3'
import song6 from '../MusicPlayer/Music/Ranjithame.mp3'
import song5 from '../MusicPlayer/Music/Celebration-Of-Varisu.mp3'
import song7 from '../MusicPlayer/Music/Katchi Sera.mp3'
import song8 from '../MusicPlayer/Music/Meherezylaa.mp3'
import song9 from '../MusicPlayer/Music/Oxygen.mp3'
import song10 from '../MusicPlayer/Music/Otraikannale.mp3'

import img1 from '../Images/posts/img8.heic'



const Menu = (props) => {
    const {musiclist}=MusicData();
    const songs=[song1,song2,song3,song4,song5,song6,song7,song8,song9,song10]
      const [index, setindex] = useState(0)
      


const vijay=()=>{
  
 
}
  

   
   
   
  
  return (
    <div className='container-fluid' id='music'>
         <div className="row d-flex  ">
            <div className="col-3 d-none btn-group-vertical h-100">
                      <button className={`y btn btn-white d-flex  border-bottom-0 w-100 justify-content-center align-items-center dropdown-toggle `}data-bs-toggle="dropdown" aria-expanded="false "  >
                      <i class="bi bi-file-earmark-music fs-3"></i>
                          <span className='text  ms-2 d-none d-xl-block  fs-6' >Songs</span>      
                      </button>


                      <ul class="dropdown-menu">
                                           <li>
                                           
                                             {/* <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#player"   id='img1'onClick={()=>{setindex(0)}}>
                                                Ajunar villu
                                             </button>
                                           
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#player"  id='img2'  onClick={()=>{setindex(1)}}>
                                                Kokkarakko
                                                </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#player"  id='img3' onClick={()=>{setindex(2)}}>
                                            Naa ready
                                             </button>
                                           </li>
                                           
                                           <li>
                                             <button className="p btn btn-info w-100"data-bs-toggle="modal" data-bs-target="#player"   id='img4'   onClick={()=>{setindex(3)}}>
                                                Vaadi vaadi
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#player"  id='img5'   onClick={()=>{setindex(4)}}>
                                                celebration
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#player"  id='img6'  onClick={()=>{setindex(5)}}>
                                                
                                                Ranjithame
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#player"  id='img7'  onClick={()=>{setindex(6)}}>
                                                
                                                Image7
                                             </button> */}
                                           </li>
                                         </ul>
                    
                     

                 
                  
                    
            </div>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-3">
            <h3 className='text fs-3'>My Favorites</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center  ">
              
            {
                                   musiclist.map((item,index)=>{
                                      
                                  return(

                                    <div className='song-content d-flex flex-column ms-3 rounded align-items-center'>
                                    <img src={item.img} alt={item.title} className='audio-img d-flex flex-column rounded' />
                                  
                                    <p className='text m-0 p-0'>Title: <span>{item.title}</span></p>
                                    <p className='text m-0 p-0'>Artist: <span>{item.artist}</span></p>
                                    <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#player"   id='img1'onClick={()=>{setindex(index)}}>
                                                play
                                             </button>
                                    
                                 
                                    
                                                  
                             
                              
                                    
                                  </div>
                                      
                           
                                  ) 

                                    })
                                   }
            </div>

            </div>
          </div>
          <div class="modal  fade" id="player" >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content bg-black d-flex flex-column align-items-center ">
                              <div className="d-flex justify-content-end w-100 ">
                                <button type="button" class="btn btn-dange border-0 mb-2 " data-bs-dismiss="modal" aria-label="Close" ><i class="bi bi-x-square text-white fs-4"></i></button>
                              </div>
                            
                              <img src={musiclist[index].img} className='audio-img d-flex flex-column rounded ' />
                              

                             
                              
                             
                              <p className='text text-white fs-4 '>Title: <span className='text-light fs-6'>{musiclist[index].title}</span></p>
                              <p className='text text-white fs-4 '>Artist: <span className='text-light fs-6'>{musiclist[index].artist}</span></p>

                              <audio src={songs[index]} controls className='w-100 ps-2'>
                                
                              </audio>
                              
                            </div>
                          </div>
                        </div> 
   

    </div>
  )
}

export default Menu
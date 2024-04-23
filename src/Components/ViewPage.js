import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from "./Images/profile1.jpg"
import img2 from "./Images/profile2.jpg"
import img3 from "./Images/profile3.jpg"
import img4 from "./Images/profile4.jpg"
import img5 from "./Images/profile5.jpg"
import "./Profile.css"
import './ViewPage.css'

import UseHooks from '../Hooks/UseHooks';

const ViewPage = (props) => {
  const {user,friend1,friend2,showDate,showTime}=UseHooks();
  
const [file, setFile] = useState()
const [likeValue2, setlikeValue2] = useState(5)
const [likeValue3, setlikeValue3] = useState(5)
let i
const like2=()=>{
  i=likeValue2
  i++

  setlikeValue2(i)

  
}
const like3=()=>{
  i=likeValue3
  i++

  setlikeValue3(i)

  
}
const handle3=()=>{
  if(props.addValue3){
      props.setData3([...props.data3,props.addValue3])
      props.setAddValue3('')
  }
  else{
      alert('enter the value')
  }
  
 
 

}






  return (
    <div>
        <div className="container border  border-dark">
                     
                        <div class="modal  fade" id="profileimage1" >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div className="d-flex justify-content-end">
                                <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                              </div>
                              <img src={img1} alt=""className=''/>
                              
                            </div>
                          </div>
                        </div>

                        <div class="modal fade " id="profileimage2" >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div className="d-flex justify-content-end">
                                <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                              </div>
                              <img src={img3} alt=""className=''/>
                              
                            </div>
                          </div>
                        </div>

                        <div class="modal fade " id="profileimage3" >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div className="d-flex justify-content-end">
                                <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                              </div>
                              <img src={img2} alt=""className=''/>
                              
                            </div>
                          </div>
                        </div>

                        <div class="modal fade" id="exampleModalToggle" >
                          <div class="modal-dialog modal-dialog-centered modal-xl mt-1">
                            <div class="modal-content ">
                             
                              <div class="modal-body ">

                              <div class="row ">
                             
                              <div class="left col-lg-6 ms-auto d-none d-lg-block">
                                <img src={img1} alt=""className='w-100 h-100'/>
                              </div>
                              <div class="right col-lg-5 col-sm-12 ms-auto d-flex flex-column justify-content-between ">

                              <div className="">
                              
                              <div className="row p-2">
                                <div className="col-sm-12 d-flex justify-content-between align-items-center ">
                              
                                <div className="left d-flex justify-content-evenly align-items-center">
                                  <img src={img1} alt="" className='commentPageProfile rounded-circle p-1  ms-2'/>
                                  <div className="">
                                    <p className='text text-dark '>{user.name}</p>
                                    <p className='text text-dark '></p>
                                  </div>
                                </div>
                                <div className="right">

                                  <i className="bi bi-three-dots text-dark  fs-4 "></i>
                                  </div>

                              
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12 d-flex flex-column">
                                <div className="row p-2">
                                <div className="col-sm-12 d-flex justify-content-between align-items-center ">
                              
                                <div className="left d-flex justify-content-evenly align-items-center">
                                  <img src={img1} alt="" className='commentPageProfile rounded-circle p-1  ms-2'/>
                                  <div className="">
                                    <p className='text text-dark '>{user.name}</p>
                                    <p className='text text-dark '></p>
                                  </div>
                                </div>
                                <div className="right">

                                  <i className="bi bi-three-dots text-dark  fs-4 "></i>
                                  </div>

                              
                                </div>
                              </div>

                                  
                                   {
                                    props.data1.map((currItem,index)=>{
                                        return(
                                            <>
                                            <li className='text-dark d-flex justify-content-between ms-5 '>
                                                {currItem}
                                                <div class="dropdown">
                                                     <i className="bi bi-three-dots-vertical  text-dark m-2 " data-bs-toggle="dropdown" aria-expanded="false"></i>

                                       
                                                    <ul class="dropdown-menu ">
                                                        <li><button className='btn btn-light text-dark border-0 w-100  ' onClick={()=>props.handleDelete1(index)}>Delete</button></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            </>
                                        )

                                    })
                                   }

                                  
                                  
                                   </div>
                                </div>



                              </div>

                                <div className="row d-flex flex-column">
                                  <div className="col-sm-12 d-flex justify-content-between align-items-center">
                                 <div className="left -dark fs-4 ms-4">
                                 <i className="bi bi-heart-fill  text-dark fs-4  " onClick={props.like1}></i>
                                   <i className="bi bi-chat text-dark fs-4  ms-4"></i>
                                   <i className="bi bi-send  text-dark fs-4 ms-4"></i>
                                 </div>
                                   <i class="bi bi-bookmark  text-dark fs-4 m-2 "></i>


                                  </div>
                                  <div className="col-sm-12 ms-4">
                                  <p className='like1 text-dark  ' >{props.likeValue1}-likes</p>
                                  <p>{props.timeAgo()}</p>
                                  </div>
                                  <div className="col-sm-12 ms-4 d-flex">
                                  <i class="bi bi-emoji-smile fs-4"></i>
                                  <input type="text"  placeholder="Search" className='comment1 bg-light opacity-100  border border-light rounded justify-content-start w-75 text-dark ms-2' onChange={(e)=>props.setAddValue1(e.target.value)} value={props.addValue1}/>
                                   <p className='text-info fs-6 fw-bold' onClick={props.handlePost1}>post</p>

                                  </div>
                                </div>
                              </div>
                              
                            </div>
                              
                              
                              </div>
                              
                              
                            </div>
                          </div>
                        </div>



                        <div class="modal fade" id="exampleModalToggle1" >
                          <div class="modal-dialog modal-dialog-centered modal-xl mt-1">
                            <div class="modal-content ">
                             
                              <div class="modal-body ">

                              <div class="row ">
                             
                              <div class="left col-lg-6 ms-auto d-none d-lg-block">
                                <img src={img3} alt=""className='w-100 h-100'/>
                              </div>
                              <div class="right col-lg-5 col-sm-12 ms-auto d-flex flex-column justify-content-between ">

                              <div className="">
                              
                              <div className="row p-2">
                                <div className="col-sm-12 d-flex justify-content-between align-items-center ">
                              
                                <div className="left d-flex justify-content-evenly align-items-center">
                                  <img src={img3} alt="" className='commentPageProfile rounded-circle p-1  ms-2'/>
                                  <div className="">
                                    <p className='text text-dark '>{friend1.name}</p>
                                    <p className='text text-dark '></p>
                                  </div>
                                </div>
                                <div className="right">

                                  <i className="bi bi-three-dots text-dark  fs-4 "></i>
                                  </div>

                              
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12 d-flex flex-column">
                                <div className="row p-2">
                                <div className="col-sm-12 d-flex justify-content-between align-items-center ">
                              
                                <div className="left d-flex justify-content-evenly align-items-center">
                                  <img src={img3} alt="" className='commentPageProfile rounded-circle p-1  ms-2'/>
                                  <div className="">
                                    <p className='text text-dark '>{friend1.name}</p>
                                    <p className='text text-dark '></p>
                                  </div>
                                </div>
                                <div className="right">

                                  <i className="bi bi-three-dots text-dark  fs-4 "></i>
                                  </div>

                              
                                </div>
                              </div>

                                  
                                   {
                                    props.data2.map((currItem,index)=>{
                                        return(
                                            <>
                                            <li className='text-dark d-flex justify-content-between ms-5 '>
                                                {currItem}
                                                <div class="dropdown">
                                                     <i className="bi bi-three-dots-vertical  text-dark m-2 " data-bs-toggle="dropdown" aria-expanded="false"></i>

                                       
                                                    <ul class="dropdown-menu ">
                                                        <li><button className='btn btn-light text-dark border-0 w-100' onClick={()=>props.handleDelete2(index)}>Delete</button></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            </>
                                        )

                                    })
                                   }

                                  
                                  
                                   </div>
                                </div>



                              </div>

                                <div className="row d-flex flex-column">
                                  <div className="col-sm-12 d-flex justify-content-between align-items-center">
                                 <div className="left -dark fs-4 ms-4">
                                 <i className="bi bi-heart-fill  text-dark fs-4  " onClick={props.like2}></i>
                                   <i className="bi bi-chat text-dark fs-4  ms-4" ></i>
                                   <i className="bi bi-send  text-dark fs-4 ms-4"></i>
                                 </div>
                                   <i class="bi bi-bookmark  text-dark fs-4 m-2 "></i>


                                  </div>
                                  <div className="col-sm-12 ms-4">
                                  <p className='like1 text-dark  ' >{props.likeValue2}-likes</p>
                                  <p>{props.timeAgo()}</p>
                                  </div>
                                  <div className="col-sm-12 ms-4 d-flex">
                                  <i class="bi bi-emoji-smile fs-4"></i>
                                  <input type="text"  placeholder="Search" className='comment1 bg-light opacity-100  border border-light rounded justify-content-start w-75 text-dark ms-2' onChange={(e)=>props.setAddValue2(e.target.value)} value={props.addValue2}/>
                                   <p className='text-info fs-6 fw-bold' onClick={props.handlePost2}>post</p>

                                  </div>
                                </div>
                              </div>
                              
                            </div>
                              
                              
                              </div>
                              
                              
                            </div>
                          </div>
                        </div>





                        <div class="modal fade" id="exampleModalToggle2" >
                          <div class="modal-dialog modal-dialog-centered modal-xl mt-1">
                            <div class="modal-content ">
                             
                              <div class="modal-body ">

                              <div class="row ">
                             
                              <div class="left col-lg-6 ms-auto d-none d-lg-block">
                                <img src={img2} alt=""className='w-100 h-100'/>
                              </div>
                              <div class="right col-lg-5 col-sm-12 ms-auto d-flex flex-column justify-content-between ">

                              <div className="">
                              
                              <div className="row p-2">
                                <div className="col-sm-12 d-flex justify-content-between align-items-center ">
                              
                                <div className="left d-flex justify-content-evenly align-items-center">
                                  <img src={img2} alt="" className='commentPageProfile rounded-circle p-1  ms-2'/>
                                  <div className="">
                                    <p className='text text-dark '>{friend2.name}</p>
                                    <p className='text text-dark '></p>
                                  </div>
                                </div>
                                <div className="right">

                                  <i className="bi bi-three-dots text-dark  fs-4 "></i>
                                  </div>

                              
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12 d-flex flex-column">
                                <div className="row p-2">
                                <div className="col-sm-12 d-flex justify-content-between align-items-center ">
                              
                                <div className="left d-flex justify-content-evenly align-items-center">
                                  <img src={img2} alt="" className='commentPageProfile rounded-circle p-1  ms-2'/>
                                  <div className="">
                                    <p className='text text-dark '>{friend2.name}</p>
                                    <p className='text text-dark '></p>
                                  </div>
                                </div>
                                <div className="right">

                                  <i className="bi bi-three-dots text-dark  fs-4 "></i>
                                  </div>

                              
                                </div>
                              </div>

                                  
                                   {
                                    props.data3.map((currItem,index)=>{
                                        return(
                                            <>
                                            <li className='text-dark d-flex justify-content-between ms-5 '>
                                                {currItem}
                                                <div class="dropdown">
                                                     <i className="bi bi-three-dots-vertical  text-dark m-2 " data-bs-toggle="dropdown" aria-expanded="false"></i>

                                       
                                                    <ul class="dropdown-menu ">
                                                        <li><button className='btn btn-light text-dark border-0 w-100' onClick={()=>props.handleDelete3(index)}>Delete</button></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            </>
                                        )

                                    })
                                   }

                                  
                                  
                                   </div>
                                </div>



                              </div>

                                <div className="row d-flex flex-column">
                                  <div className="col-sm-12 d-flex justify-content-between align-items-center">
                                 <div className="left -dark fs-4 ms-4">
                                 <i className="bi bi-heart-fill  text-dark fs-4  " onClick={like3}></i>
                                   <i className="bi bi-chat text-dark fs-4  ms-4" ></i>
                                   <i className="bi bi-send  text-dark fs-4 ms-4"></i>
                                 </div>
                                   <i class="bi bi-bookmark  text-dark fs-4 m-2 "></i>


                                  </div>
                                  <div className="col-sm-12 ms-4">
                                  <p className='like1 text-dark  ' >{props.likeValue3}-likes</p>
                                  <p>{props.timeAgo()}</p>
                                  </div>
                                  <div className="col-sm-12 ms-4 d-flex">
                                  <i class="bi bi-emoji-smile fs-4"></i>
                                  <input type="text"  placeholder="Search" className='comment1 bg-light opacity-100  border border-light rounded justify-content-start w-75 text-dark ms-2' onChange={(e)=>props.setAddValue3(e.target.value)} value={props.addValue3}/>
                                   <p className='text-info fs-6 fw-bold' onClick={handle3}>post</p>

                                  </div>
                                </div>
                              </div>
                              
                            </div>
                              
                              
                              </div>
                              
                              
                            </div>
                          </div>
                        </div>




                        <div class="modal fade" id="createPost" >
                          <div class="modal-dialog modal-dialog-centered modal-lg mt-1 ">
                            <div class="modal-content ">
                             
                              <div class="modal-body d-flex justify-content-center align-items-center flex-column">
                             <h2>Create Post</h2>
                             <hr />
                          
                             
                      
                                <h3>{user.id}</h3>
                                
                            
                                <img src={img1} alt=""  className='w-25 h-25'/>
                                
                                
                              
                                  <label htmlFor="">Post-photo</label>
                                  <input type="file"name='pphoto' className='form-control' id='file' />
                               
                                 
                                 
                              
                                  
                                  <input type="submit" className='form-control' value="Create post" />
                             
                              
                            
                              </div>
                            </div>
                          </div>
                        </div>
                              
                             
                             <div class="modal fade" id="editModal" >
                                <div class="modal-dialog modal-dialog-centered modal-lg mt-1 ">
                                  <div class="modal-content ">
                                    <div className="modal-header">
                                    <h2>Your Post</h2>
                                        <button className="btn-close" data-bs-dismiss="modal"></button>

                                    </div>
                             
                                      <div class="modal-body d-flex justify-content-center align-items-center flex-column">
                                        <div className="msg"></div>
                                    

                                        
                                        



                                      </div>
                                  </div>
                                </div>
                              </div>
                              
                             

  
        </div>



    </div>
  )
}

export default ViewPage
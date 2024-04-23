
import React, { useState } from 'react'
import logo from './Images/logo.png'
import logo1 from './Images/logo11.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from "./Images/profile1.jpg"
import  imag1  from "./Images/posts/img1.heic";
import  imag2  from "./Images/posts/img2.heic";
import  imag3  from "./Images/posts/img3.heic";
import  imag4  from "./Images/posts/img13.jpg";
import  imag5 from "./Images/posts/img14.jpg";
import  imag6 from "./Images/posts/img7.heic";
import  imag7 from "./Images/posts/img8.heic";

import "./Profile.css"
import UseHooks from '../Hooks/UseHooks';



const ProfilePage = () => {
    const {profile,user,home,setUser}=UseHooks();
    const [profileId, setProfileId] = useState()
    const [profileName, setProfileName] = useState()
    const [profileCap1, setProfileCap1] = useState()
    const [profileCap2, setProfileCap2] = useState()
    const [profileAge, setProfileAge] = useState()
    const [profileDOb, setProfileDob] = useState()
        const[changeImage,setChangeImage]=useState(imag1)



        const updateProfile=()=>{
         
          setUser(previousState => {
            return { ...previousState, id: profileId
              
             }
          });
                setUser(previousState => {
                  return { ...previousState, name: profileName }
                });
                setUser(previousState => {
                  return { ...previousState, caption1: profileCap1 }
                });
                setUser(previousState => {
                  return { ...previousState, caption2: profileCap2 }
                });
                setUser(previousState => {
                  return { ...previousState, age: profileAge}
                });
                setUser(previousState => {
                  return { ...previousState, dob: profileDOb }
                });
             
         
                  
            
    
        
          }
          console.log(profileId);
          console.log(profileName);
          console.log(user.id);
          console.log(user.name);
        
       
          

       
  return (
    <div>
    <div className="container-fluid  bg-black text-white ">
         <div className="row">
             <div className="col-lg-1 col-md-1 col-xxl-2 col-xl-2 d-flex  border-end flex-column pt-3 d-none d-md-block" id='Left-content'>
                 <div className='left-top-image border-0d-flex justify-content-start mb-1'>
                 <img src={logo} alt="" className=' d-none d-xl-block'  id='left-top-img'/>
                 <button className="btn  d-flex  mb-1 mt-1  d-lg-block d-xl-none d-xxl-none w-100">
                 <i class="bi bi-instagram text-white"></i>
                             
                     </button>
                 </div>
                 <div className="row ">
                     <div className="col d-flex flex-column mb-1 ">
                     <button className="btn  d-flex  mb-1 mt-1 " onClick={home}>
                         <i className="bi bi-house text-white   "></i>
                         <span className='text  text-white ms-2 d-none d-xl-block'>home</span>      
                     </button>
                     <button className="btn   d-flex  mb-1 mt-1">
                         <i className="bi bi-search text-white  "></i>
                         <span className='text  text-white ms-2 d-none d-xl-block' >Search</span>      
                     </button>
                     <button className="btn   d-flex  mb-1 mt-1">
                     <i className="bi bi-compass  text-white  "></i>
                         <span className='text text-white  ms-2 d-none d-xl-block'>Explore</span>      
                     </button>
                     <button className="btn d-flex  mb-1 mt-1">
                     <i className="bi bi-film  text-white "></i>
                         <span className='text text-white  ms-2 d-none d-xl-block'>Reels</span>      
                     </button>
                     <button className="btn   d-flex mb-1 mt-1 ">
                         <i className="bi bi-chat-left-dots  text-white "></i>
                         <span className='text  text-white ms-2 d-none d-xl-block'>Messages</span>      
                     </button>
                     <button className="btn d-flex mb-1 mt-1 ">
                         <i className="bi bi-heart  text-white "></i>
                         <span className='text  text-white ms-2 d-none d-xl-block'>Notification</span>      
                     </button>
                     <button className="btn   d-flex  mb-1 mt-1">
                         <i className="bi bi-plus-square text-white "></i>
                         <span className='text  text-white ms-2 d-none d-xl-block'>Create</span>      
                     </button>
                     <button className="btn   d-flex align-items-center mb-1 mt-1" onClick={profile}>
                     <img src={changeImage} alt="" className='rounded-circle    ' id='sidenav-img'/>
                         <span className='text text-white  ms-2 fs-6 d-none d-xl-block'>Profile</span>      
                     </button>
                     
                     

                     </div>

                 </div>
                 <div className="row mt-5">
                     <div className="col d-flex flex-column pb-1 " id='left-bottom'>
                         <button className="btn pb-1  d-flex  mb-1 d-flex">
                             <i class="bi bi-threads  text-white "></i>
                             <span className='text  text-white ms-2 d-none d-xl-block'>Threads</span>      
                         </button>
                         <button className="btn   d-flex" >
                         <i class="bi bi-three-dots text-white "></i>
                             <span className='text  text-white ms-2 d-none d-xl-block'>More</span>      
                         </button>

                     </div>
                 
                 </div>

             </div>
             

     

             <div className="col-xxl-10 col-lg-10 col-md-10 col-12 " id='profile-main-content'>
               <div className="container-fluid">
                 <div className="row d-flex justify-content-center">
                   <div className="col-xxl-8 col-xl-12 col-md-12 col-sm-12    pt-4 ">

                              





                   <div className="row border-bottom  d-xs-block d-md-none position-fixed top-0 w-100  bg-black " id='profile-top' >
                   <div className="col d-flex justify-content-between">
                     <i className="bi bi-gear-wide fs-2 text-white"></i>
                     <p className=' fs-6 fw-medium  text-white'>{user.id}</p>
                     <i className="bi bi-person-add fs-2  text-white"></i>
                   </div>
                 </div>
                 <div className="row mb-5 d-flex pt-2" id='profile-heading'>
                   
                   <div className="col-md-4 col-sm-2 col-xs-12 d-flex " id='profile-heading-image'>
                     <img src={changeImage} alt="" className='rounded-circle  p-1 m-2' id='profileImage'/>
                     <div className="row pt-2 d-xs-block d-sm-none">
                       <div className="col d-flex align-items-start flex-column ">
                         <p className="text fs-5  ">{user.id}</p>
                        
                         <div className='d-flex align-items-center'id='pp' >
                         <button className="btn btn-info ms-1 bg-light  dropdown-toggle   w-100 fs-6" data-bs-toggle="dropdown" aria-expanded="false " >Change Photo</button>

                         <ul class="dropdown-menu">
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"   id='img1'onClick={()=>{setChangeImage(imag1)}}>
                                                Image1
                                             </button>
                                           
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img2'  onClick={()=>{setChangeImage(imag2)}}>
                                                Image2
                                                </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img3' onClick={()=>{setChangeImage(imag3)}}>
                                                Image3
                                             </button>
                                           </li>
                                           
                                           <li>
                                             <button className="p btn btn-info w-100"data-bs-toggle="modal" data-bs-target="#editProfileImage"   id='img4'   onClick={()=>{setChangeImage(imag4)}}>
                                                Image4
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img5'   onClick={()=>{setChangeImage(imag5)}}>
                                                Image5
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img6'  onClick={()=>{setChangeImage(imag6)}}>
                                                
                                                Image6
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img7'  onClick={()=>{setChangeImage(imag7)}}>
                                                
                                                Image7
                                             </button>
                                           </li>
                                         </ul>




                         <button className="btn btn-light ms-2 bg-light  w-100 fs-6  " data-bs-toggle="modal" data-bs-target="#editProfile"  id='btn'>Edit Profile</button>
                         </div>
                      
                       </div>
                     </div>

                   </div>
                   <div className="col-md-8 col-sm-10  d-sm-block d-none ">
                     <div className="row pt-2">
                       <div className="col d-flex align-items-start">
                         <p className="text fs-5  ">{user.id}</p>
                        
                         <div className='d-flex align-items-center' >
                         <button className="btn btn-info ms-1 bg-light  dropdown-toggle   w-100 fs-6" data-bs-toggle="dropdown" aria-expanded="false " >Change Photo</button>

                         <ul class="dropdown-menu">
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"   id='img1'onClick={()=>{setChangeImage(imag1)}}>
                                                Image1
                                             </button>
                                           
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img2'  onClick={()=>{setChangeImage(imag2)}}>
                                                Image2
                                                </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img3' onClick={()=>{setChangeImage(imag3)}}>
                                                Image3
                                             </button>
                                           </li>
                                           
                                           <li>
                                             <button className="p btn btn-info w-100"data-bs-toggle="modal" data-bs-target="#editProfileImage"   id='img4'   onClick={()=>{setChangeImage(imag4)}}>
                                                Image4
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img5'   onClick={()=>{setChangeImage(imag5)}}>
                                                Image5
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img6'  onClick={()=>{setChangeImage(imag6)}}>
                                                
                                                Image6
                                             </button>
                                           </li>
                                           <li>
                                             <button className="p btn btn-info w-100" data-bs-toggle="modal" data-bs-target="#editProfileImage"  id='img7'  onClick={()=>{setChangeImage(imag7)}}>
                                                
                                                Image7
                                             </button>
                                           </li>
                                         </ul>




                         <button className="btn btn-light ms-2 bg-light  w-100 fs-6  " data-bs-toggle="modal" data-bs-target="#editProfile"  id='btn'>Edit Profile</button>
                         </div>
                      
                       </div>
                     </div>
                     <div className="row d-none d-md-block">
                       <div className="col d-flex  ">
                         <p className="text ms-2 fs-6 "><span className='text fs-5 fw-medium'>{user.post}</span> Post</p>
                         <p className="text ms-5 fs-6 "><span className='text fs-5 fw-medium'>{user.followers}</span> Followers</p>
                         <p className="text ms-5 fs-6 "><span className='text fs-5 fw-medium'>{user.following} </span> Following</p>
                       </div>
                     </div>
                     <div className="row d-none d-md-block">
                       <div className="col">
                        
                         <p className="text fs-6 fw-normal ">{user.caption1}....<i class="bi bi-emoji-smile-fill  rounded-circle fs-5 text-warning" ></i></p>
                         <p className="text  fs-6 fw-normal ">{user.caption2}........ <i class="bi bi-emoji-kiss-fill text-warning fs-5 "></i></p>
                       </div>
                     </div>

                   </div>
                  
                 </div>
                 <div className="row d-md-none d-sm-block  " id='top-head-bottom'>
                       
                        
                         <p className="text fs-5 fw-normal">{user.caption1}....<i class="bi bi-emoji-smile-fill text-warning fs-5"></i></p>
                         <p className="text  fs-5 fw-normal">{user.caption2}......... <i class="bi bi-emoji-kiss-fill text-warning fs-5 "></i></p>
                     
                     </div>
                 
     
                 <div className="row  d-sm-block d-md-none">
                       <div className="col-md-12 d-flex justify-content-around ">
                         <div className="d-flex flex-column align-items-center">
                         <span className='text fs-6 fw-medium'>{user.post}</span>
                         <p className="text ms-2  fs-5 opacity-75">Post</p>
                         </div>
                         <div className="d-flex flex-column align-items-center">
                         <span className='text fs-6 fw-medium'>{user.followers}</span>
                         <p className="text ms-2 fs-5 opacity-75 ">Followers</p>
                         </div><div className="d-flex flex-column align-items-center">
                         <span className='text fs-6 fw-medium'>{user.following}</span>
                         <p className="text ms-2 fs-5 opacity-75 ">Following</p>
                         </div>


                        
                       </div>
                     </div>
                 <div className="row d-flex justify-content-center " >
                   <div className="col border-top border-light-subtle ">
                    
                       <div className="row ">
                         <div className="col d-flex justify-content-evenly " id='profile-title'>
                           <button className='btn d-flex border-0'>
                             <i class="bi bi-grid-3x3 text-white opacity-75  border-0  fs-5"></i>
                             <span className='text-white opacity-75 fs-5 fw-medium ms-2  d-none d-md-block'>Post</span>
                           
                           </button>
                           <button className='btn d-flex border-0 '>
                             <i class="bi bi-film  text-white opacity-75  border-0 fs-5"></i>
                             <span className='text-white opacity-75 fs-5 fw-medium ms-2  fs-5 d-none d-md-block'>Reels</span>
                           
                           </button>
                           <button className='btn d-flex border-0'>
                             <i class="bi bi-bookmark text-white opacity-75  border-0  fs-5"></i>
                             <span className='text-white opacity-75 fs-5 fw-medium ms-2  d-none d-md-block'>Saved</span>
                           
                           </button>
                           <button className='btn d-flex border-0'>
                             <i class="bi bi-person-square text-white opacity-75  border-0  fs-5"></i>
                             <span className='text-white opacity-75 fs-5 fw-medium ms-2  d-none d-md-block'> Tagged</span>
                           
                           </button>
                           

                         </div>
                       </div>

                     
                   </div>
                 </div>
                 <div className="row d-flex justify-content-center min-vh-100" id='post'>
                   <div className="col border border-dark">
                   <div className="row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-xl-3">
                   <div className="col p-0">
                     <img src={imag1} alt="" className='img w-100  h-100 'data-bs-toggle="modal" data-bs-target="#exampleModal1" id='i1'  />
                   </div>
                    <div className="col p-0">
                     <img src={imag2} alt="" className='img w-100  h-100' data-bs-toggle="modal" data-bs-target="#exampleModal2 "id='i2'  />
                    </div>
                   <div className="col p-0">
                     <img src={imag3} alt="" className='img w-100  h-100' data-bs-toggle="modal" data-bs-target="#exampleModal3"id='i3' />
                   </div>
                   <div className="col p-0">
                     <img src={imag4} alt="" className='img w-100  h-100'data-bs-toggle="modal" data-bs-target="#exampleModal4" id='i4'  />
                   </div>
                    <div className="col p-0">
                     <img src={imag5} alt="" className='img w-100  h-100' data-bs-toggle="modal" data-bs-target="#exampleModal5" id='i5' />
                    </div>
                    <div className="col p-0">
                     <img src={imag6} alt="" className='img w-100  h-100'data-bs-toggle="modal" data-bs-target="#exampleModal6" id='i6' />
                   </div>
                   <div className="col p-0">
                     <img src={imag7} alt="" className='img w-100  h-100'data-bs-toggle="modal" data-bs-target="#exampleModal7" id='i6' />
                   </div>
                   </div>

                 
                   


                     
                    
                     
                 
                     
                   </div>
                 </div>
                   </div>
                 </div>
                 

                 
                
               </div>
             
               
             </div>
             <div className="row d-xs-block d-md-none position-fixed  bottom-0 bg-black justify-content-center w-100  border-top w-100">
                     <div className="col d-flex flex-row justify-content-between align-items-centrer">
                     <button className="btn  border-0  mb-1  "  onClick={home}>
                         <i className="bi bi-house text-white  fs-4 "></i>
                             
                     </button>
                     <button className="btn  border-0   mb-1 ">
                         <i className="bi bi-search text-white  fs-4 "></i>
                             
                     </button>
                    
                     <button className="btn  border-0 mb-1 ">
                     <i className="bi bi-film  text-white fs-4"></i>
                              
                     </button>
                     <button className="btn  border-0 mb-1  ">
                         <i className="bi bi-chat-left-dots text-white  fs-4 "></i>
                             
                     </button>
                     
                     <button className="btn  border-0 " onClick={profile}>
                     <img src={changeImage} alt="" className='rounded-circle border border-white   ' id='sidenav-img'/>
                             
                     </button>
                    
                     
                     

                     </div>

                 </div>
            
         </div>
             
   
     </div>
     
     <div class="modal  " id="exampleModal1" >
                       <div class="modal-dialog modal-dialog-centered">
                         <div class="modal-content">
                            <div className="row d-flex justify-content-end bg-transparent ">
                            <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                             </div>
                           <img src={imag1} alt=""className=''/>
                           
                         </div>
                       </div>
                     </div>
                     <div class="modal  " id="exampleModal2" >
                       <div class="modal-dialog  modal-dialog-centered ">
                         <div class="modal-content">
                            <div className="row d-flex justify-content-end bg-transparent ">
                            <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                             </div>
                           <img src={imag2} alt=""className=''/>
                           
                         </div>
                       </div>
                     </div>
                     
                     <div class="modal  " id="exampleModal3" >
                       <div class="modal-dialog  modal-dialog-centered">
                         <div class="modal-content">
                            <div className="row d-flex justify-content-end bg-transparent ">
                            <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                             </div>
                           <img src={imag3} alt=""className=''/>
                           
                         </div>
                       </div>
                     </div>
                     <div class="modal  " id="exampleModal4" >
                       <div class="modal-dialog modal-dialog-centered">
                         <div class="modal-content">
                            <div className="row d-flex justify-content-end bg-transparent ">
                            <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                             </div>
                           <img src={imag4} alt=""className=''/>
                           
                         </div>
                       </div>
                     </div>
                     <div class="modal  " id="exampleModal5" >
                       <div class="modal-dialog modal-dialog-centered">
                         <div class="modal-content">
                            <div className="row d-flex justify-content-end bg-transparent ">
                            <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                             </div>
                           <img src={imag5} alt=""className=''/>
                           
                         </div>
                       </div>
                     </div>
                     <div class="modal " id="exampleModal6" >
                       <div class="modal-dialog  modal-dialog-centered ">
                       <div className="row d-flex justify-content-end bg-transparent ">
                           <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                             </div>
                         <div class="modal-content ">
                            
                           <img src={imag6} alt=""className=''/>
                           
                         </div>
                       </div>
                     </div>
                     <div class="modal " id="exampleModal7" >
                       <div class="modal-dialog  modal-dialog-centered ">
                       <div className="row d-flex justify-content-end bg-transparent ">
                       <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                             </div>
                         <div class="modal-content ">
                            
                           <img src={imag7} alt=""className=''/>
                           
                         </div>
                       </div>
                     </div>


                     <div class="modal fade " id="editProfile" >
                             <div className="modal-dialog modal-dialog-centered modal-lg mt-1 ">
                               <div className="modal-content ">
                                <div className="top-content d-flex">
                                    <div className="row">
                                    <div className="left col-6 d-lg-block d-none">
                                        <img src={changeImage} alt="" className='w-100 h-100' />

                                        </div>

                                        <div className="right col-6 p-3 ">
                                         <div className="d-flex">
                                         <img src={changeImage} alt="" className='w-25 h-25 d-lg-none d-block rounded-circle ms-2'/>
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                        <p className='text fs-5 fw-medium ms-3'>{user.name}</p>
                                        <p className="text fs-5 fw-medium ms-3">{user.id}</p>
                                        </div>
                                         </div>


                                        <form>
                               
                                                <div className="">
                                                <label className="form-label">Profile Id</label>
                                                <input type="text" className="form-control" onChange= {(e)=>setProfileId(e.target.value)} />
                                                
                                                </div>
                                                <div className="">
                                                <label className="form-label">Profile name</label>
                                                <input type="text" className="form-control" onChange= {(e)=>setProfileName(e.target.value)} />

                                                
                                                </div>
                                                <div className="">
                                                <label className="form-label">Caption 1</label>
                                                <input type="text" className="form-control" onChange= {(e)=>setProfileCap1(e.target.value)} />

                                                
                                                </div>
                                                <div className="">
                                                <label className="form-label">Caption 2</label>
                                                <input type="text" className="form-control" onChange= {(e)=>setProfileCap2(e.target.value)} />

                                                
                                                </div>
                                                <div className="">
                                                <label className="form-label">Age</label>
                                                <input type="text" className="form-control" onChange= {(e)=>setProfileAge(e.target.value)} />

                                                
                                                </div>
                                                <div className="">
                                                <label className="form-label">Date of Birth</label>
                                                <input type="date" className="form-control" onChange= {(e)=> setProfileDob(e.target.value)} />

                                                
                                                </div>
                                                <div className="d-flex justify-content-center align-items center">
                                                  <button className="btn btn-info w-50" onClick={updateProfile}>Update</button>
                                                   
                                                </div>
                                            </form>



                                        </div>
                                    </div>
                                   
                                </div>
                               


                               </div>
                             </div>
                       </div>

                       <div class="modal fade" id="editProfileImage" >
                             <div className="modal-dialog modal-dialog-centered modal-lg mt-1 ">
                               <div className="modal-content d-flex justify-content-center flex-column ">
                               <button type="button" class=" btn btn-danger w-25 border border-light  " data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-square text-dark fs-1"></i></button>
                                 <img src={changeImage} alt="" />


                               </div>
                             </div>
                         </div>



 </div>
  )
}

export default ProfilePage
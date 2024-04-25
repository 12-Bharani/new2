import React, { useEffect, useState } from 'react'
import logo from './Images/logo.png'
import logo1 from './Images/logo11.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from "./Images/profile1.jpg"
import img2 from "./Images/profile2.jpg"
import img3 from "./Images/profile3.jpg"

import  imag1  from "./Images/posts/img1.heic";

import './Home.css'
import UseHooks from '../Hooks/UseHooks';
import ViewPage from './ViewPage';





const Home = () => {
   
    const {profile,user,friend1,friend2,timer,follow,playVideo}=UseHooks();
   let post1,post2
   const [likeValue1, setlikeValue1] = useState(12)
   const [likeValue2, setlikeValue2] = useState(5)
   const [likeValue3, setlikeValue3] = useState(5)
   const [addValue1, setAddValue1] = useState('')
    const [addValue2, setAddValue2] = useState('')
    const [addValue3, setAddValue3] = useState('')
   
   
   const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
     const [data3, setData3] = useState([])

   let i,j,k



   const like1=()=>{
    i=likeValue1
    i++

    setlikeValue1(i)
  
    
 }
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



 const timeAgo=(date)=> {
    const seconds = Math.floor((new Date() - date) / 1000);

    const interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    if (interval === 1) {
        return interval + " year ago";
    }

    const months = Math.floor(seconds / 2628000);
    if (months > 1) {
        return months + " months ago";
    }
    if (months === 1) {
        return months + " month ago";
    }

    const days = Math.floor(seconds / 86400);
    if (days > 1) {
        return days + " days ago";
    }
    if (days === 1) {
        return days + " day ago";
    }

    const hours = Math.floor(seconds / 3600);
    if (hours > 1) {
        return hours + " hours ago";
    }
    if (hours === 1) {
        return hours + " hour ago";
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes > 1) {
        return minutes + " minutes ago";
    }
    if (minutes === 1) {
        return minutes + " minute ago";
        
    }

    return "just now";
}








 const handlePost1=()=>{
    if(addValue1){
        setData1([...data1,addValue1])
        setAddValue1('')
    }
    else{
        alert('enter the value')
    }
    
   
   

 }


 const handlePost2=()=>{
    if(addValue2){
        setData2([...data2,addValue2])
        setAddValue2('')
    }
    else{
        alert('enter the value')
    }
    
   
   

 }
  const handle3=()=>{
    if(addValue3){
        setData3([...data3,addValue3])
        setAddValue3('')
    }
    else{
        alert('enter the value')
    }
    
   
   

 }
 const handleDelete1=(indexVal)=>{
    const remove=data1.filter((item,indexItem)=>indexItem !==indexVal);
    setData1(remove)
 }
 const handleDelete2=(indexVal)=>{
    const remove=data2.filter((item,indexItem)=>indexItem !==indexVal);
    setData2(remove)
 }
 const handleDelete3=(indexVal)=>{
    const remove=data3.filter((item,indexItem)=>indexItem !==indexVal);
    setData3(remove)
 }

 const [show, setshow] = useState(false)
const [preload, setpreload] = useState(true)
// setTimeout(()=>{
// setpreload(!preload)
// console.log("hello");

// },2000)

   useEffect(()=>{
    const fetch=()=>{
        setTimeout(() => {
            setpreload(!preload)
            setshow(!show)
        }, 2000);
    }
    fetch();
   },[])


  
  return (
    <div className=''>
         {preload && (
             <div className="container-fluid" id='preloader'>
             <div className="loader  col-12 d-flex justify-content-center align-items-center  ">
                 
                 <div className="spinner rounded-circle ">
                    <div className="spinner2 rounded-circle">
                       

                    </div>
                         
                 </div>
                 
             </div>

             </div>
         )}

      
       
      {show && (
          <div className="container-fluid bg-black  ">
          
                  
       
           
                
            


          <div className="row ">
              <div className="col-md-1 col-xxl-2 col-xl-2 d-flex  border-end border-secondary  flex-column pt-3 d-none d-md-block " id='Left-content'>
                  <div className='left-top-image d-flex justify-content-start mb-1 align-items-center'>
                  <img src={logo} alt="" className=' d-none d-xl-block'  id='left-top-img'/>
                 
                  <button className="btn  d-flex  mb-1 mt-1  d-lg-block d-xl-none d-xxl-none w-100">
                  <i class="bi bi-instagram text-white"></i>
                              
                      </button>
                  </div>
                  <div className="row ">
                      <div className="col d-flex flex-column mb-1 ">
                      <button className="btn  d-flex  mb-1 mt-1 ">
                          <i className="bi bi-house  text-white "></i>
                          <span className='text-white ms-2 d-none d-xl-block' onClick={Home}>Home</span>      
                      </button>
                      <button className="btn   d-flex  mb-1 mt-1">
                          <i className="bi bi-search text-white "></i>
                          <span className='text-white ms-2 d-none d-xl-block' >Search</span>      
                      </button>
    
                      <button className="btn   d-flex  align-items-center mb-1 mt-1" onClick={profile}>
                      <img src={imag1} alt="" className='rounded-circle  border border-white  ' id='sidenav-img'/>
                          <span className='text ms-2  d-none d-xl-block fs-6 text-white'>Profile</span>      
                      </button>
                      
                      

                      </div>

                  </div>
                  <div className="row mt-5">
                      <div className="col d-flex flex-column pb-1 " id='left-bottom'>
                          <button className="btn pb-1  d-flex  mb-1 d-flex">
                              <i class="bi bi-threads text-white "></i>
                              <span className='text-white ms-2 d-none d-xl-block'>Threads</span>      
                          </button>
                          <button className="btn   d-flex">
                          <i class="bi bi-three-dots  text-white"></i>
                              <span className='text-white ms-2 d-none d-xl-block'>More</span>      
                          </button>

                      </div>
                  
                  </div>

              </div>
              <div className="col col-xxl-7  " id='main-content'>
              <div className="row d-xs-block d-md-none position-fixed  w-100  bg-black ">
                      <div className="col   d-flex justify-content-between align-items-center p-1">
                          <img src={logo} alt="" className='d-sm-block d-md-none' />
                          <i class="bi bi-instagram text-white d-xs-block d-sm-none fs-1 ps-1"></i>
                         
                             
                              
                               <div className="d-flex z-index-1 align-items-center ">
                               <div className="bg-light rounded d-flex ">
                               <input type="text" placeholder="Search" className='bg-transparent  border-0  d-sm-block d-none ' data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover"/>
                               <span><button className="d-flex border-0 bg-transparent" >
                                     <i class="bi bi-search  fs-4  text-dark"></i>
                                          
                                 </button></span>
                              
                               </div>
                               
                                 
                              
                         
                          
                         
                                 <button className="btn  d-flex border-0 ms-2 p-1 ">
                                     <i class="bi bi-heart  fs-4  text-white"></i>
                                          
                                 </button>
                               </div>
                          

                          
                      </div>
                  </div>
                  
                  
                 <div className="row pt-0  d-flex justify-content-center   ">
                      <div className="col d-flex justify-content-start  p-1  " id='story'>
                          <div className="story-image d-flex flex-column justify-content-center align-items-center" onClick={playVideo}>
                          <img src={imag1} alt="" className='rounded-circle border p-1  ms-2  '  data-bs-toggle="modal" href="#profileimage1" />
                          <span className='text text-white d-flex align-items-center'>Your Story<i class="bi bi-plus ms-1 fs-6"></i></span>

                          </div>
                          <div className="story-image d-flex flex-column justify-content-center align-items-center">
                          <img src={img3} alt="" className='rounded-circle  p-1  ms-2' data-bs-toggle="modal" href="#profileimage2"/>
                          <span className='text text-white '>{friend1.name}</span>

                          </div>
                          <div className="story-image d-flex flex-column justify-content-center align-items-center">
                          <img src={img2} alt="" className='rounded-circle  p-1  ms-2' data-bs-toggle="modal" href="#profileimage3"/>
                          <span className='text text-white '>{friend2.name}</span>

                          </div>
                         
                          
                              
                             
                      </div>
                      
                 

                 
                 </div>
                 <div className="row  d-flex justify-content-center p-1 mt-3 pb-5"  >

                  <div className="col-md-7   p-1" id='post1' >
                      <div className="row   d-flex align-items-center" id="post-title">
                          <div className="col-sm-10 col-md-10 col-xl-10 col-xxl-10 col-lg-10 col-10 d-flex">
                              <img src={imag1} alt="" className='rounded-circle border border-white '  />
                              <div >
                                  <p className='text-white fs-5 fw-medium ms-2' >{user.id}<span className='text-white opacity-75 fs-6 fw-medium'> . {timeAgo}</span></p>
                              </div>

                          </div>
                          <div className="col-1 d-flex justify-content-end">
                          <i className="bi bi-three-dots-vertical text-white"></i>

                          </div>

                      </div>
                      <div className="row p-1" id='post-content'>
                          <img src={imag1} alt="" className='w-100 h-100'/>
                          
                      </div>
                      <div className="row" id='post-bottom1'>
                         
                              <div className="row  m-0 ">
                                 <div className="col d-flex justify-content-between">
                                 
                                 <div className="left d-flex ">
                                 <i className="bi bi-heart-fill  text-white  " onClick={like1}></i>
                                 <i className="bi bi-chat text-white  ms-4" data-bs-toggle="modal" href="#exampleModalToggle" role="button"></i>
                                 <i className="bi bi-send  text-white ms-4"></i>
                                 
                                 </div>
                                 <i class="bi bi-bookmark  text-white "></i>

                                  
                                 </div>
                              </div>
                              <div className="row mt-0 p-0">
                                 <div className="col ">
                                 <p className='like1 text-white  ms-4' >{likeValue1}-likes</p>
                                 
                                  
                                 </div>
                                 
                              </div>
                              <div className="row">
                              <div className="col d-flex justify-content-between">
                                 <ul>
                                 {
                                  data1.map((currItem,index)=>{
                                      return(
                                          <>
                                          <li className='text-light d-flex justify-content-between'>
                                              {currItem}
                                              <div class="dropdown">
                                                   <i className="bi bi-three-dots-vertical  text-white ms-4 " data-bs-toggle="dropdown" aria-expanded="false"></i>

                                     
                                                  <ul class="dropdown-menu">
                                                      <li><button className='btn btn-info text-dark w-100 border-0 ' onClick={()=>handleDelete1(index)}>Delete</button></li>
                                                  
                                                  </ul>
                                              </div>
                                          </li>
                                          </>
                                      )

                                  })
                                 }

                                 </ul>
                                
                                 </div>
                              </div>
                              <div className="col d-flex justify-content-between align-items-center">
                                 <input type="text"  placeholder="Search" className='comment1 bg-light opacity-100  border border-light rounded justify-content-start w-75 text-dark ms-2' onChange={(e)=>setAddValue1(e.target.value)} value={addValue1}/>
                                 <p className='text-info fs-6 fw-bold' onClick={handlePost1}>post</p>
                                
                                 </div>
                                 
                          


                      </div>

                  </div>

                  <div className="col-md-7 mt-5  p-1" id='post2' >
                      <div className="row   d-flex align-items-center" id="post-title">
                          <div className="col-sm-10 col-md-10 col-xl-10 col-xxl-10 col-lg-10 col-10 d-flex">
                              <img src={img3} alt="" className='rounded-circle border border-white '  />
                              <div >
                                  <p className='text-white fs-5 fw-medium ms-2' >{friend1.id}<span className='text-white opacity-75 fs-6 fw-medium'> . {timeAgo}</span></p>
                              </div>

                          </div>
                          <div className="col-1 d-flex justify-content-end">
                          <i className="bi bi-three-dots-vertical text-white"></i>

                          </div>

                      </div>
                      <div className="row p-1" id='post-content'>
                          <img src={img3} alt="" className='w-100 h-100'/>
                          
                      </div>
                      <div className="row" id='post-bottom1'>
                         
                              <div className="row  m-0 ">
                                 <div className="col d-flex justify-content-between">
                                 
                                 <div className="left d-flex ">
                                 <i className="bi bi-heart-fill  text-white  " onClick={like2}></i>
                                 <i className="bi bi-chat text-white  ms-4" data-bs-toggle="modal" href="#exampleModalToggle1" role="button"></i>
                                 <i className="bi bi-send  text-white ms-4"></i>
                                 
                                 </div>
                                 <i class="bi bi-bookmark  text-white "></i>

                                  
                                 </div>
                              </div>
                              <div className="row mt-0 p-0">
                                 <div className="col ">
                                 <p className='like1 text-white  ms-4' >{likeValue2}-likes</p>
                                 
                                  
                                 </div>
                                 
                              </div>
                              <div className="row">
                              <div className="col d-flex justify-content-between">
                                 <ul>
                                 {
                                  data2.map((currItem,index)=>{
                                      return(
                                          <>
                                          <li className='text-light d-flex justify-content-between'>
                                              {currItem}
                                              <div class="dropdown">
                                                   <i className="bi bi-three-dots-vertical  text-white ms-4 " data-bs-toggle="dropdown" aria-expanded="false"></i>

                                     
                                                  <ul class="dropdown-menu">
                                                      <li><button className='bbtn btn-info text-dark w-100 border-0' onClick={()=>handleDelete2(index)}>Delete</button></li>
                                                  
                                                  </ul>
                                              </div>
                                          </li>
                                          </>
                                      )

                                  })
                                 }

                                 </ul>
                                
                                 </div>
                              </div>
                              <div className="col d-flex justify-content-between align-items-center">
                                 <input type="text"  placeholder="Search" className='comment1 bg-light opacity-100  border border-light rounded justify-content-start w-75 text-dark ms-2' onChange={(e)=>setAddValue2(e.target.value)} value={addValue2}/>
                                 <p className='text-info fs-6 fw-bold' onClick={handlePost2}>post</p>
                                
                                 </div>
                                 
                          


                      </div>

                  </div>


  <div className="col-md-7   p-1 mt-3" id='post4' >
                      <div className="row   d-flex align-items-center" id="post-title">
                          <div className="col-sm-10 col-md-10 col-xl-10 col-xxl-10 col-lg-10 col-10 d-flex">
                              <img src={img2} alt="" className='rounded-circle border border-white '  />
                              <div >
                                  <p className='text-white fs-5 fw-medium ms-2' >{friend2.id}<span className='text-white opacity-75 fs-6 fw-medium'> . {timeAgo}</span></p>
                              </div>

                          </div>
                          <div className="col-1 d-flex justify-content-end">
                          <i className="bi bi-three-dots-vertical text-white"></i>

                          </div>

                      </div>
                      <div className="row p-1" id='post-content'>
                          <img src={img2} alt="" className='w-100 h-100'/>
                          
                      </div>
                      <div className="row" id='post-bottom1'>
                         
                              <div className="row  m-0 ">
                                 <div className="col d-flex justify-content-between">
                                 
                                 <div className="left d-flex ">
                                 <i className="bi bi-heart-fill  text-white  " onClick={like3}></i>
                                 <i className="bi bi-chat text-white  ms-4" data-bs-toggle="modal" href="#exampleModalToggle2" role="button"></i>
                                 <i className="bi bi-send  text-white ms-4"></i>
                                 
                                 </div>
                                 <i class="bi bi-bookmark  text-white "></i>

                                  
                                 </div>
                              </div>
                              <div className="row mt-0 p-0">
                                 <div className="col ">
                                 <p className='like1 text-white  ms-4' >{likeValue3}-likes</p>
                                 
                                  
                                 </div>
                                 
                              </div>
                              <div className="row">
                              <div className="col d-flex justify-content-between">
                                 <ul>
                                 {
                                  data3.map((currItem,index)=>{
                                      return(
                                          <>
                                          <li className='text-light d-flex justify-content-between'>
                                              {currItem}
                                              <div class="dropdown">
                                                   <i className="bi bi-three-dots-vertical  text-white ms-4 " data-bs-toggle="dropdown" aria-expanded="false"></i>

                                     
                                                  <ul class="dropdown-menu">
                                                      <li><button className='btn btn-info text-dark w-100 border-0 ' onClick={()=>handleDelete3(index)}>Delete</button></li>
                                                  
                                                  </ul>
                                              </div>
                                          </li>
                                          </>
                                      )

                                  })
                                 }

                                 </ul>
                                
                                 </div>
                              </div>
                              <div className="col d-flex justify-content-between align-items-center">
                                 <input type="text"  placeholder="Search" className='comment1 bg-light opacity-100  border border-light rounded justify-content-start w-75 text-dark ms-2' onChange={(e)=>setAddValue3(e.target.value)} value={addValue3}/>
                                 <p className='text-info fs-6 fw-bold' onClick={handle3}>post</p>
                                
                                 </div>
                                 
                          


                      </div>

                  </div>
                 
                 </div>
                 <div className="row d-xs-block d-md-none position-fixed  bottom-0 bg-black justify-content-center w-100 ">
                      <div className="col d-flex flex-row justify-content-around align-items-center pb-3">
                      <button className="btn border-0   mb-1  ">
                          <i className="bi bi-house text-white  fs-4 "></i>
                              
                      </button>
                      <button className="btn  border-0   mb-1 ">
                          <i className="bi bi-search text-white  fs-4 "></i>
                              
                      </button>
                     
                      <button className="btn border-0  mb-1 ">
                      <i className="bi bi-film  text-white fs-4"></i>
                               
                      </button>
                      <button className="btn border-0  mb-1  ">
                          <i className="bi bi-chat-left-dots text-white  fs-4 "></i>
                              
                      </button>
                      
                      <button className="btn border-0   " onClick={profile}>
                      <img src={imag1} alt="" className='rounded-circle   ' id='sidenav-img'/>
                              
                      </button>
                     
                      
                      

                      </div>

                  </div>
                
              </div>
              <div className="col-xl-3 col-xxl-3 d-flex justify-content-center  pt-4 d-none d-xl-block" id='right-content'>
                  <div className="container">
                      <div className="row d-flex justify-content-center align-items-center   m-0 ">
                          <div className="col-md-8 d-flex justify-content-start ">
                              <img src={imag1} alt="" className='img rounded-circle m-1'/>
                             <span className='sugg-text m-2 '>
                                <p className='text text-white d-flex flex-column fw-medium'>Phenix bharani 
                                  <span className="fw-medium text-white opacity-50">
                                     bharani
                                  </span>
                                </p>
                              
                             </span>
                              

                          </div>
                          <div className="col-md-4">
                          <button className="btn border-0 text-info w-50  fw-medium">Switch</button>

                          </div>
                      </div>
                      <div className="row  ">
                          <div className="col-12 d-flex justify-content-between">
                          <p className='text  text-white opacity-75 fs-6'>Suggestion for you </p>
                        <p className='see-all text-white opacity-75 fs-6 '> See All</p>

                          </div>
                        
                        
                      </div>
                      <div className="row d-flex justify-content-center align-items-center   m-0 ">
                          <div className="col-md-8 d-flex justify-content-start align-items-center ">
                              <img src={img1} alt="" className='img rounded-circle m-1'/>
                             <span className='sugg-text m-2 '>
                                <p className='text text-white d-flex flex-column fw-medium'>Thala.Ajith
                                  <span className="fw-medium text-white opacity-75">
                                  ajith
                                  </span>
                                </p>
                              
                             </span>
                              

                          </div>
                          <div className="col-md-4">
                              <button className="btn border-0 text-info w-50  fw-medium" onClick={follow}>Follow</button>
                              

                          </div>
                      </div>
                      <div className="row d-flex justify-content-center align-items-center   m-0 ">
                          <div className="col-md-8 d-flex justify-content-start ">
                              <img src={img1} alt="" className='img rounded-circle m-1'/>
                             <span className='sugg-text m-2 '>
                                <p className='text text-white d-flex flex-column fw-medium'>karthik.rockz
                                  <span className="fw-medium text-white opacity-75">
                                     karthik
                                  </span>
                                </p>
                              
                             </span>
                              

                          </div>
                          <div className="col-md-4">
                          <button className="btn border-0 text-info w-50  fw-medium">Follow</button>

                          </div>
                      </div>
                      <div className="row d-flex justify-content-center align-items-center   m-0 ">
                          <div className="col-md-8 d-flex justify-content-start ">
                              <img src={img1} alt="" className='img rounded-circle m-1'/>
                             <span className='sugg-text m-2 '>
                                <p className='text text-white d-flex flex-column fw-medium'>smart.Hari
                                  <span className="fw-medium text-white opacity-75">
                                     hariprasanth
                                  </span>
                                </p>
                              
                             </span>
                              

                          </div>
                          <div className="col-md-4">
                          <button className="btn border-0 text-info w-50  fw-medium">Follow</button>

                          </div>
                      </div>
                      <div className="row d-flex justify-content-center align-items-center   m-0 ">
                          <div className="col-md-8 d-flex justify-content-start ">
                              <img src={img1} alt="" className='img rounded-circle m-1'/>
                             <span className='sugg-text m-2 '>
                                <p className='text text-white d-flex flex-column fw-medium'>sdk.Dinesh
                                  <span className="fw-medium text-white opacity-75">
                                     dinesh
                                  </span>
                                </p>
                              
                             </span>
                              

                          </div>
                          <div className="col-md-4">
                          <button className="btn border-0 text-info w-50  fw-medium">Follow</button>
                          </div>
                      </div>
                  </div>

              </div>
          </div>

<div className="">





























</div>
          <br />
          <br />
          <br />
          <br />

          <br />

          <br />
          <br />
          <br />
          <br />
          <br />


          <hr />
          <hr />
          <hr />
          <ViewPage 
           data1={data1}
           setData1={setData1}
           addValue1={addValue1}
           setAddValue1={setAddValue1}
           handleDelete1={handleDelete1}
           handlePost1={handlePost1}
           likeValue1={likeValue1}
           data2={data2}
           setData2={setData2}
           addValue2={addValue2}
           setAddValue2={setAddValue2}
           handleDelete2={handleDelete2}
           handlePost2={handlePost2}
           likeValue2={likeValue2}
           data3={data3}
           setData3={setData3}
           addValue3={addValue3}
           setAddValue3={setAddValue3}
           handleDelete3={handleDelete3}
           handle3={handle3}
           likeValue3={likeValue3}
           like1={like1}
          
           timeAgo={timeAgo}
          
          />
      </div>



      )


      }
       

    </div>

    
  )
}

export default Home
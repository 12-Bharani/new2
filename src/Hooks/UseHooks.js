import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import  imag7 from "../Components/Images/posts/img8.heic";

const UseHooks = () => {
  const navigate=useNavigate()
  const [image, setImage] = useState(imag7)
 
  let a=new Date()
  let showTime=a.getTime()
  let showDate=a.getDate()
 
  
  

  
const [user, setUser] = useState({
  name:"Bharani",
  id:"_.pheonix bharani._",
  followers:100,
  following:10,
  post:21,
  caption1:"Travel lover",
  caption2:"Web Developer",
  gender:"Male",
  age:25,
  dob:"12-03-1999"
  
  
  
})

const [friend1, setFriend1] = useState({
  name:"Gowri Sankar",
  id:"r.k.Gowrisankar",
  followers:80,
  following:100,
  post:12
  
})

const [friend2, setFriend2] = useState({
  name:"ManiKandan",
  id:"r.k.m",
  followers:80,
  following:100,
  post:10
  
})







  const profile=()=>{
    navigate('/Profile')
  }
 
  const home=()=>{
    navigate('/Home')
  }
  const handleSubmit=()=>{
    navigate('/Home')
  }
  const login=()=>{
    navigate('/FormLogin')
  }
  const signUp=()=>{
    navigate('/FormSignup')
  }

























  return{
    profile,user,friend1,friend2,home,handleSubmit,login,signUp,showDate,showTime,setUser
  }
}

export default UseHooks
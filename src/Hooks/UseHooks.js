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


const [value, setValue] = useState(
  {
      username:"",
       email:"",
       password:"",
       cpassword:""
  }
)

const [errors, setErrors] = useState({})
const handleChange=(e)=>{
 const{name,value}=e.target;
 setValue((prevValues)=>{
  return{
      ...prevValues,[name]:value
  }
 })
  
}
const handleSubmit1 =(event)=>{
  event.preventDefault();
  setErrors(validateLogin(value))
  
}

const validateLogin=(value)=>{
  let errors={};
  
  if(!value.email.trim()){
      errors.email="Email required"
  }
  else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value.email)){
      errors.email="Email address is invalid"
  }

  if(!value.password.trim()){
      errors.password="password required"
  }
  else if(value.password.length < 6 ){
      errors.password="Password needs to be more than 6 character"


  }
 
 
 
  else{
    navigate('/Home')
  }

  return errors

}







  const profile=()=>{
    navigate('/Profile')
  }
 
  const home=()=>{
    navigate('/Home')
  }
  const handleSubmit=()=>{

    navigate('/Home')
  }
  const musicPlayer=()=>{

    navigate('/Musicplayer')
  }

 


























  return{
    profile,user,friend1,friend2,home,handleSubmit,handleSubmit1,handleChange,value,errors,showDate,showTime,setUser,musicPlayer
  }
}

export default UseHooks
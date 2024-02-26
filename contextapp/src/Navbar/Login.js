import React, { useState,useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavContext } from './NavApp';
import  './login.css';


const Login = () => {
     const {setisAuth}=useContext(NavContext);
     const [useremail, setuseremail]=useState('');
     const [password,setpassword]=useState('');
     const navigate=useNavigate();
     const location =useLocation();
     const{email}=location.state ||{};
   
  const handleform=(event)=>
  {
    event.preventDefault();
  
    if(!useremail|| !password)
    {
      alert('please enter your email and password')

    }
    else
    {
      alert(`Email :${useremail} \n password: ${password}`);
      sessionStorage.setItem('username',useremail);
       setisAuth(true);
      navigate('/');
    }
   
    setuseremail('');
    setpassword('');

  }

const handleaccount=()=>
{
  navigate('/signup')
}
  return (
    <div>
    <form className="container" id="container" onSubmit={handleform} >
       <div className="mb-3 formdiv">
         <label htmlFor="useremail" className="form-label">
           Email address
         </label>
         <input
           type="email"
           className="form-control"
           id="useremail"
           aria-describedby="emailHelp"
         
           placeholder="Enter Your Email"
           value={email||useremail} onChange={(event)=>{setuseremail(location.state.value)}}
         />
       </div>
       <div className="mb-3">
         <label htmlFor="password" className="form-label">
           Password
         </label>
         <input type="password" className="form-control" id="password"placeholder="Enter your password" value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
       </div>
       <p>If you don't have Account Create your Account<button type="button" className="btn btn-primary" onClick={handleaccount}>
        Create Account
       </button></p>
       <p>If already have account Please login</p>
       <button type="submit" className="btn btn-primary">
         Login
       </button>
      </form>
 </div>
 
)
  
}

export default Login;

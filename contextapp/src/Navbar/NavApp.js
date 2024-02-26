import React, { createContext, useState } from 'react';
//import { Navbar } from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Career from './Career';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';

import AboutUs from './AboutUs';
import NavbarComponent from './NavbarComponent';


export const NavContext =createContext(null);
const NavApp = () => {
    const isloggedIn =sessionStorage.getItem('username') !==null
    const [isAuth,setisAuth]=useState(isloggedIn??false);
    const UserContext={isAuth,setisAuth};
  return (
    <NavContext.Provider value={UserContext}>
        <BrowserRouter>
    <NavbarComponent/>
    <Routes>
        <Route path='/' element={<Home/>}/>
       
       {isAuth &&(
       <>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </>
        )}
        {!isAuth &&
        (
          <Route path='/signup' element={<Signup setisAuth={setisAuth}/>}/>
        )}
        <Route path='/login' element={<Login/>}/>
        
    </Routes>
    </BrowserRouter>
    </NavContext.Provider>
  )
}

export default NavApp;

import React, { useContext } from 'react'
import "../stylesheets/styles.scss"
import { auth, googleProvider } from "../config/firebase";
import {signOut} from "firebase/auth"
import { AuthContext } from '../context/AuthContext'
import { NavLink } from 'react-router-dom';

const Nav = () => {

    // const {currentUser} = useContext(AuthContext)

  return (
    <>
      <div className='navbar'>
      <span className="logo"><img src="https://cdn.dribbble.com/users/81906/screenshots/2971464/mental_health_logo.jpg" alt="" /></span>
      <ul>
        <NavLink to="/home"> <li>Home</li> </NavLink>
        <NavLink to="/daily-tips"> <li>  Daily tips  </li> </NavLink>
        <NavLink to="/dairy"> <li>Dairy</li> </NavLink>
        {/* <NavLink to="/chat"> <li>Chat</li> </NavLink> */}
      </ul>
      <div className="user">
        <span>{auth.currentUser.displayName}</span>
       <NavLink to="/" >   <button onClick={()=>signOut(auth)}>logout</button> </NavLink>
      
      </div>
    </div>
    </>
  )
}

export default Nav

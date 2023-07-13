import React from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../config/firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from "react";


const NavBarChat = () => {
  const {currentUser} = useContext(AuthContext)


  return (
    <div className='navbar'>
      <span className="logo">You-therapy</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)} >Logout</button>
      </div>
    </div>
  )
}

export default NavBarChat

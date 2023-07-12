import React from 'react'

const NavBarChat = () => {
  return (
    <div className='navbar'>
      <span className="logo">You-therapy</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/17491276/pexels-photo-17491276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Ferguson</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBarChat

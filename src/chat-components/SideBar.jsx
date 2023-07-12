import React from 'react'
import NavBarChat from './NavBarChat'
import Search from './Search'
import Chats from './Chats'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <NavBarChat />
      <Search />
      <Chats />
    </div>
  )
}

export default SideBar

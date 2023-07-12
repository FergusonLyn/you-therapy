import React from 'react'
import SideBar from '../chat-components/SideBar'
import Chat from '../chat-components/Chat'
import "../stylesheets/chatstyles.css"
import "../stylesheets/styles.scss"

const HomeChat = () => {
  return (
    <div>
        <div className="home">
            <div className="container">
                <SideBar />
                <Chat />
            </div>

        </div>
      
    </div>
  )
}

export default HomeChat

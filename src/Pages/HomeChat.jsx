import React from 'react'
import Nav from '../components/Nav'
import "../stylesheets/styles.scss"
import TherapistProfile from '../components/TherapistProfile'

const HomeChat = () => {
  return (
    <div>
      <Nav />
      <h4>Get in-touch with a therapist below</h4>
      <div className="therapy-container">
        <div className="right">
            <TherapistProfile />
            <TherapistProfile />
            <TherapistProfile />
        </div>
        <div className="left">
            <TherapistProfile />
            <TherapistProfile />
            <TherapistProfile />
        </div>
      </div>
    </div>
  )
}

export default HomeChat

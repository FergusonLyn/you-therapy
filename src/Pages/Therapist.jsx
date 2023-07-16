import React from 'react'
import TherapistProfile from '../components/TherapistProfile'

const Therapist = () => {
  return (
    <div>
        <h4>Get in-touch with a therapist below</h4>
      <div className="therapy-container">
        <div className="right">
            <TherapistProfile />
            
        </div>
        <div className="left">
            <TherapistProfile />
            
        </div>
        </div>
      
    </div>
  )
}

export default Therapist

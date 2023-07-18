import React from 'react'
import Nav from '../components/Nav'
import "../stylesheets/styles.scss"


import Therapist from './Therapist'
import { Route, Routes } from 'react-router-dom'
import Tips from './Tips'
import Dairy from './Dairy'
// import Dairy from './Dairy'
// import "../font-awesome-4.7.0/scss/_icons.scss"

const HomeChat = () => {
  return (
    <div>
      <Nav />
     <Therapist />
      {/* <Tips />
      <Dairy /> */}
      {/* <Route path={match.url + "/home"} element={<Therapist /> } /> */}
      {/* <Route path={match.url + "/daily-tips"} element={<Tips /> } /> */}
    
      

      
    </div>
  )
}

export default HomeChat

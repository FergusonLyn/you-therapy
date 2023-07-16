import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'

const TherapistProfile = () => {
  const profile = [
    {
      id:1,
      name: "Peter Notepad" ,
      study: "Dr. Of Psychology" ,
      university: "University of Boston" ,
      details: "Specialize in child therapy and relationship counsel "
    } ,
    {
      id:2,
      name: "Moses Hyghman" ,
      study: "Dr. Of Mental Health Nursing" ,
      university: "University of Ghana" ,
      details: "Counsels on depression and anxiety "
    } ,
    {
      id:3,
      name: "Ferguson Johny" ,
      study: "Masters in Clinical Health Counseling" ,
      university: "Hodges University" ,
      details: "Specialize in general health counseling "
    } ,
  ]


  return (
    <>
    
      
          {profile.map( (profile, index) => {
            return (
              <>
        <div className="profile" >
        <div className="circle">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        </div>
          <div className="info" >
              <h4 key={index}>{profile.name}</h4>
              <span >
                {profile.study} <br />
               <h6 > {profile.university}<br />
                {profile.details} </h6>
              </span>

              <ul>
            <li>
              <a href="https://wa.me/+233554767705?text=Hello%20there!">
                
              <FontAwesomeIcon icon={faMessage} bounce  className="icon"/>
              </a>
            </li>
            <li>
      
              <a href="tel:+233554767705"> 
              <FontAwesomeIcon icon={faPhone} bounce  className="icon"/>
              </a>
            </li>
            <li>
        
              <a href="mailto:psky730@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} bounce  className="icon"/>
              </a>
            </li>
          </ul>

          </div>
        </div>
              </>
            )
          })}
       
    </>
  );
};

export default TherapistProfile;

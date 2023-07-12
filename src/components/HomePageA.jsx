import { NavLink } from "react-router-dom"


const HomePageA = () => {

  return (
    <>
       <div className="flex-container-2">
           <div className="right-side">
                <h4>You-Therapy</h4>
                <p className="text">
                    Convenient and <br />
                    Reliable <br />
                    <span className="therapy">therapy</span>
                </p>
                <div className="btn">
                <NavLink to="logIn" > <button className="login" >  Get started  </button>  </NavLink>
                <NavLink to="getstarted"> <button className="get-started">LogIn</button>   </NavLink>
                </div>
            </div>
            <div className="left-side">
                <img src="https://energyresourcing.com/wp-content/uploads/2022/07/mental-health-wellness-during-covid-19.jpg" alt="" />
            </div>
       </div>


       
    </>
  )
}

export default HomePageA

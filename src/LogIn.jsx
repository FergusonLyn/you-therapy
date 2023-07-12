import { NavLink } from "react-router-dom"
import "./stylesheets/Log.css"
import { auth } from "./config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

const LogIn = () => {
  return (
    <>
     <div className="login-flex-container">
        <div className="login-one">
            <h2>Create <br /> New Account</h2>
            <a href="">Already registered? Log In</a> <br />

            <label htmlFor="">Name</label> <br />
            <input type="text" /> <br />
            <label htmlFor="">Email</label> <br />
            <input type="email" name="" id="" /> <br />
            <label htmlFor="">Password</label> <br />
            <input type="password" name="" id="" /> <br />
            <button>sign up</button> 
        </div>
        <div className="login-two">
        <img
            src="https://img.freepik.com/premium-vector/cute-woman-meditating-yoga-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-1470.jpg"
            alt=""
          />
        </div>
     </div>
    </>
  )
}

export default LogIn

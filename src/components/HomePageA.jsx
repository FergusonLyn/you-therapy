import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const HomePageA = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex-container-2">
        <div className="right-side">
          <h4>
            <img
              src="https://cdn.dribbble.com/users/81906/screenshots/2971464/mental_health_logo.jpg"
              alt=""
            />
            You-Therapy{" "}
          </h4>

          <p className="text">
            Convenient and <br />
            Reliable <br />
            <span className="therapy">therapy</span>
          </p>
          <div className="btn">
            <button className="login" onClick={signInWithGoogle}>
              {" "}
              Continue with Google{" "}
            </button>
            {/* <NavLink to="getstarted"> <button className="get-started">LogIn</button>   </NavLink> */}
          </div>
        </div>
        <div className="left-side">
      
          <img
            src="https://energyresourcing.com/wp-content/uploads/2022/07/mental-health-wellness-during-covid-19.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HomePageA;

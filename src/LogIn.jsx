import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";

import "./stylesheets/Log.css";
import Add from "./img/addAvatar.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider, db, storage } from "./config/firebase";
import { createUserWithEmailAndPassword , signInWithPopup, updateProfile} from "firebase/auth";
import "./stylesheets/styles.scss"

const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error();
    }
  };

 


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };



  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="login-flex-container">
        <div className="login-one">
          <h2>
            Create <br /> New Account
          </h2>
          <a href="">Already registered? Log In</a> <br />
          {/* <label htmlFor="">Name</label> <br /> */}
          <input required type="text" placeholder="display name" /> <br />
          {/* <label htmlFor="">Email</label> <br /> */}
          <input required type="email" placeholder="email"  onChange={(e) => setEmail(e.target.value)}/> <br />
          {/* <label htmlFor="">Password</label> <br /> */}
          <input required type="password" placeholder="password"   onChange={(e) => setPassword(e.target.value)} /> <br />

          
        <div className="form-mini-flex">
          <div className="form-right">
          <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
            </label> 
          </div>
          <div className="form-left">
          <NavLink to="/home">  <button disabled={loading} onClick={signUp}>  sign up</button> </NavLink>
            {loading && "Uploading and compressing the image please wait..."} 
            {err && <span>Something went wrong</span>}
          </div>
        </div>
        </div>

        <div className="login-two">
          <img
            src="https://img.freepik.com/premium-vector/cute-woman-meditating-yoga-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-1470.jpg"
            alt=""
          />
        </div>
      </div>
      </form>
    </>
  );
};

export default LogIn;

import "./stylesheets/Log.css";
import { auth, googleProvider } from "./config/firebase";
import { createUserWithEmailAndPassword , signInWithPopup} from "firebase/auth";
import { useState } from "react";

const GetStarted = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error();
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error();
    }
  };

  return (
    <>
      <div className="center">
        <h2>Login</h2>
        <a href="">Sign Up to create a new account</a> <br />
        <label htmlFor="">Email</label> <br />
        <input
          type="email"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Password</label> <br />
        <input
          type="password"
          name=""
          id=""
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button onClick={signIn}>sign in</button>
        <br />
        <button onClick={signInWithGoogle}>sign in with Google</button>
      </div>
    </>
  );
};

export default GetStarted;

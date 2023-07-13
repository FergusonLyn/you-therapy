import "./stylesheets/Log.css";
import { auth, googleProvider } from "./config/firebase";
import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const GetStarted = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
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

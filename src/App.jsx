import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import GetStarted from "./GetStarted"
import HomeChat from "./Pages/HomeChat";


function App() {
  const [count, setCount] = useState(0);

  return (
    // <Routes>
    //   <Route exact path="/" element={<Home />} />   
    //   <Route exact path="login" element={<LogIn />} />   
    //   <Route exact path="getstarted" element={<GetStarted />} />   
    // </Routes>

    <HomeChat />
  );
}

export default App;

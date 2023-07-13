import { useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import LogIn from "./LogIn";
import GetStarted from "./GetStarted"
import HomeChat from "./Pages/HomeChat";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/getstarted" />;
    }

    return children
  };

  return (
    <Routes>
      <Route exact path="/"  element={<Home /> } /> 
       
          <Route exact path="home" element={
                <ProtectedRoute>
                  <HomeChat />
                 </ProtectedRoute>
              }/>
          <Route exact path="login" element={<LogIn />} />   
          <Route exact path="getstarted" element={<GetStarted />} />   
        
    </Routes>

    // <HomeChat />
  );
}

export default App;

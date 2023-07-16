import { useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import HomeChat from "./Pages/HomeChat";
import { AuthContext } from "./context/AuthContext";
import Therapist from './Pages/Therapist'
import Tips from './Pages/Tips'
import Dairy from './Pages/Dairy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                  <HomeChat />
              }/>
      <Route exact path="" element={ <Therapist />} />
      <Route  exact path="daily-tips" element={<Tips />} />
      <Route  exact path="dairy" element={<Dairy />} />        
        
    </Routes>

    // <HomeChat />
  );
}

export default App;

import { Outlet , Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn , setIsLoggedIn]= useState(false);
  const navigate = useNavigate();

  const logIn = ()=>{
    setIsLoggedIn(true)
  }
  const logOut = ()=>{
    setIsLoggedIn(false)
  }

  useEffect(()=>{
    isLoggedIn ? navigate('/') : navigate('/login');
  },[isLoggedIn])

  const Door = ()=>  {isLoggedIn ? <NavBar logout={logOut}  /> : <Navigate to="/login" />}


  return (
    <div className="app">
      {Door}
      <Outlet context={logIn}/>
    </div>
  );
}

export default App;

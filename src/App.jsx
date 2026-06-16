
import './App.css'
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
function App() {
 
 useEffect(() => {    ReactGA.send({ hitType: "pageview", page: window.location.pathname });  }, []);
  return (
   <div>
    <h1>Welcome to online Course Website</h1>
    
   </div>
  )
}
export default App;

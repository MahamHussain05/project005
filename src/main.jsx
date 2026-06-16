//npm install react-ga4
import { StrictMode } from 'react'
import { createRoot , ReactDOM} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactGA from "react-ga4";
ReactGA.initialize("G-CFWZQNTSVN");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




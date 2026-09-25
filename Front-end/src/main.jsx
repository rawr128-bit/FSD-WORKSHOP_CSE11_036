// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Home from './components/home.jsx'
// import About from './components/aboutme.jsx'

// createRoot(document.getElementById('root')).render(

//   <StrictMode>
//     <About/>
//     <App />
//     <Home/>
//   </StrictMode>,
// )


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ApiTester from './components/api_tester.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ApiTester />
//   </StrictMode>,
// )


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
import React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./jobseekercomponents/NavBar";
import LoginForm from "./jobseekercomponents/LogIn"
import ApplyJobs from "./jobseekercomponents/ApplyJobs";
import ViewJobs from "./jobseekercomponents/ViewJobs";
import { Route, Routes, Navigate } from "react-router-dom";
// import postjobs from "./employercomponents/postjobs";


function App() {
  return (
     <>
       <NavBar /> 
      
       <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/ApplyJobs" element={<ApplyJobs />} />
        <Route path="/ViewJobs" element={<ViewJobs />} />
      </Routes> 

      <postjobs />
     </>
  );
}

export default App;

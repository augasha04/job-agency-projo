import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";


function navbar() {
  return (
    <div className="employer-navbar">
      
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ViewJobs">View Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/postjobs">Post Jobs</NavLink>
        </li>
      </ul>
     
    </div>
  );
}

export default navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <div className="seeker-navbar">
      <ul>
        <li>
          <NavLink to="/">Ho me</NavLink>
        </li>
        <li>
          <NavLink to="/ViewJobs">View Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/ApplyJobs">Apply Jobs</NavLink>
        </li>
      </ul>
    
     

      
    </div>
  );
}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
 const Navbar=()=>{
    return(
        <div className="container-fluid">
            <div className='row'>
                <div className="col-10 mx-auto">

                
        <nav className="navbar navbar-expand-lg bg-body-tertiary " >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">React Project</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeclassName='menu_active'exact className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassName='menu_active'exact className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeclassName='menu_active'exact className="nav-link" to="/about">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeclassName='menu_active'exact className="nav-link" to="/contacts">contacts</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
    )
 }
 export default Navbar;
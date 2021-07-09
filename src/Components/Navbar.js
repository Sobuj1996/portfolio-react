import React from 'react';
import Logo from "../Components/img/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <a className="navbar-brand" link to="#"><img className="logo" src={Logo}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"#f9ab00"}}/>
         </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" link to="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" link to="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" link to="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" link to="#">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" link to="#">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" link to="#">Contact</a>
        </li>
       
      </ul>
     
    </div>
  </div>
    </nav>
    );
}

export default Navbar;

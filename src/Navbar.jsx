import React from 'react';
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import './index.css'


const Navbar = () =>{
  return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container">
    <a className="navbar-brand" href="#">Ansh Varshney</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Service">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </>
    )
}
export default Navbar;
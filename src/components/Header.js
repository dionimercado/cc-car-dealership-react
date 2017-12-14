import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/General.css';
import '../assets/css/Header.css';

const Header = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/"><img src="assets/images/logo.png" alt="Cars Dealership" /></NavLink>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li className="active"><NavLink  to="/">Home</NavLink></li>
                <li><NavLink to="/inventory">Inventory</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </div>
  </nav>
);

export default Header;
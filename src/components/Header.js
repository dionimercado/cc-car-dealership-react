import React from 'react';
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
            <a className="navbar-brand" href="/"><img src="assets/images/logo.png" alt="Cars Dealership" /></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
  </nav>
);

export default Header;
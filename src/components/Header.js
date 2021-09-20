import React from 'react';
import Logo from './img/logo.png'
import './style.css'
const Header = () => {
    return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{background:'green',color:'white'}}>
        <div className="container">
            <a className="navbar-brand" href="index.html"><img width='120px' src={Logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#meal">Meal</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#category" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="index.html">Action</a></li>
                    <li><a className="dropdown-item" href="index.html">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="index.html">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a href='contact.html' className="nav-link">Contact</a>
                </li>
            </ul>
            </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;
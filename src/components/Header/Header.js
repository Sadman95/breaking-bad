import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    const headerStyle = {
        display: "flex",
        padding: "16px",
        justifyContent: "center"
      }
    return (
        <div className="main">
            <div className="menu">
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Services</a>
                <a href="/contact">Conatct</a>
            </div>
            <div style={headerStyle}>
                <img width="10%" src={logo} alt="logo missing" />
                <h1 style={{marginLeft: "16px", color: "#085B2E"}}>Breaking Bad Characters</h1>
            </div>
        </div>
    );
};

export default Header;
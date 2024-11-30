import React from 'react';
import './../styles/main.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <a href="#home">YourLogo</a>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

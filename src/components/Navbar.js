import React, { useState } from 'react';
import './../styles/main.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="menu-icon" onClick={handleMenuToggle}>
                <div className={menuOpen ? 'line open' : 'line'}></div>
                <div className={menuOpen ? 'line open' : 'line'}></div>
                <div className={menuOpen ? 'line open' : 'line'}></div>
            </div>
            <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import './../styles/main.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="navbar-brand">Noah Greenbaum</div>
            <div className="menu-icon" onClick={handleMenuToggle}>
                <div className={menuOpen ? 'line open' : 'line'}></div>
                <div className={menuOpen ? 'line open' : 'line'}></div>
                <div className={menuOpen ? 'line open' : 'line'}></div>
            </div>
            <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

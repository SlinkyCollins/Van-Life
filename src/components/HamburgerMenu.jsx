import React, { useState } from 'react';
import './HamburgerMenu.css'; // Import CSS for styling (create this file)
import { Link, NavLink } from "react-router-dom";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <ul className={`menu ${isOpen ? 'open' : 'close'}`}>
                <li> 
                <NavLink
                to="/about"
                style={{textDecoration: 'none', color: "#000"}}
                >
                About
                </NavLink></li>
                <li>
                <NavLink
                to="/vans"
                style={{textDecoration: 'none', color: "#000"}}
                >
                Vans
                </NavLink>
                </li>
                <li>
                <NavLink
                to="/signin"
                style={{textDecoration: 'none', color: "orange"}}
                >
                Sign In
                </NavLink>
                </li>
                {/* Add more menu items as needed */}
            </ul>
        </div>
    );
};

export default HamburgerMenu;

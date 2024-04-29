import { useState } from 'react';
import './HamburgerMenu.css'; // Import CSS for styling (create this file)
import { NavLink, useLocation } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { pathname } = useLocation();

    return (
        <div className="hamburger-menu">
            <button className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li>
                    <NavLink
                        to="/"
                        style={{ textDecoration: pathname === "/" ? "underline" : "none", color: "#000" }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about"
                    style=
                    {{ 
                        textDecoration: pathname === "/about" ? "underline" : "none",
                        color: "#000" 
                    }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/vans"
                        style={{ textDecoration: pathname.startsWith("/vans") ? "underline" : "none",  color: "#000" }}
                    >
                        Vans
                    </NavLink>
                </li>
                <li className="dropdown">
                    <NavLink to="/host" style={{ textDecoration: pathname === "/host" ? "underline" : "none", color: "#000" }}>Host <ArrowDropDownIcon /></NavLink>
                    <ul className="dropdown-content">
                        <li style={{ listStyle: "none" }}><NavLink to="/host" style={{ textDecoration: pathname === "/host" ? "underline" : "none", color: "#000" }}>Dashboard</NavLink></li>
                        <li style={{ listStyle: "none" }}><NavLink to="/host/income" style={{ textDecoration: pathname === "/host/income" ? "underline" : "none", color: "#000" }}>Income</NavLink></li>
                        <li style={{ listStyle: "none" }}><NavLink to="/host/listedvans" style={{ textDecoration: pathname === "/host/listedvans" ? "underline" : "none", color: "#000" }}>Vans</NavLink></li>
                        <li style={{ listStyle: "none" }}><NavLink to="/host/reviews" style={{ textDecoration: pathname === "/host/reviews" ? "underline" : "none", color: "#000" }}>Reviews</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink
                        to="/signup"
                        style={{ textDecoration: pathname === "/signup" ? "underline" : "none", color: "#000" }}
                    >
                        Sign up
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/signin"
                        style={{ textDecoration: pathname === "/signin" ? "underline" : "none", color: "orange" }}
                    >
                        Log In
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HamburgerMenu;

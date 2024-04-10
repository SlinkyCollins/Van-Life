import { Link, NavLink, useLocation } from "react-router-dom";
import "../components/Navbar.css";

const Navbar2 = () => {
    const { pathname } = useLocation();

    return (
        <nav style={{ background: "#FFF7ED", padding: "30px", width: "100%", userSelect: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h1 style={{ fontSize: "25px", fontWeight: "900" }}>
                        <Link to="/" style={{ textDecoration: "none", cursor: "pointer", color: "#000" }}>#VANLIFE</Link>
                    </h1>
                </div>
                <ul style={{ display: "flex", gap: "40px" }}>
                    <li style={{ listStyleType: "none" }}>
                        <NavLink
                            to="/host"
                            className="nav-link"
                            style={{
                                textDecoration: pathname.startsWith("/host") ? "underline" : "none",
                                color: pathname.startsWith("/host") ? "#000" : "#4D4D4D",
                                fontSize: "16px",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                        >
                            Host
                        </NavLink>
                    </li>

                    <li style={{ listStyleType: "none" }}>
                        <NavLink
                            to="/about"
                            className="nav-link"
                            style={{
                                textDecoration: pathname === "/about" ? "underline" : "none",
                                color: pathname === "/about" ? "#000" : "#4D4D4D",
                                fontSize: "16px",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                        >
                            About
                        </NavLink>
                    </li>

                    <li style={{ listStyleType: "none" }}>
                        <NavLink
                            to="/vans"
                            className="nav-link"
                            style={{
                                textDecoration: pathname === "/vans" ? "underline" : "none",
                                color: pathname === "/vans" ? "#000" : "#4D4D4D",
                                fontSize: "16px",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                        >
                            Vans
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar2;

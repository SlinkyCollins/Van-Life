import { Link, NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Signin = () => {
    const { pathname } = useLocation();
  return (
    <div style={{background: "rgba(255, 247, 237, 1)"}}>
        <nav style={{ background: "#FFF7ED", padding: "30px", position: "sticky", top: "0", left: "0", zIndex: "1000", width: "100%", userSelect: "none" }}>
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
                                textDecoration: pathname === "/host" ? "underline" : "none",
                                color: pathname === "/host" ? "#000" : "#4D4D4D",
                                fontSize: pathname === "/host" ? "18px" : "16px",
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
                                fontSize: pathname === "/about" ? "18px" : "16px",
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
                                fontSize: pathname === "/vans" ? "18px" : "16px",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                        >
                            Vans
                        </NavLink>
                    </li>

                    <li style={{ listStyleType: "none" }}>
                        <NavLink
                            to="/signin"
                            className="nav-link"
                            style={{
                                color: pathname === "/signin" ? "#004bff" : "#4D4D4D",
                                fontSize: "18px",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                        >
                            <CgProfile />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <h1 style={{fontWeight: "700", fontSize: "50px", textAlign: "center", lineHeight: "80px"}}>Sign in to your account</h1>

        <div style={{display: "flex", flexDirection: "column", width: "70%", justifyContent: "center", alignItems: "center", minHeight: "100vh", margin: "0 auto"}}>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password"/>
            <button>Sign in</button>
        <p style={{margin: "0 auto"}}>Dont have an account? <a href="">Create one now</a></p>
        </div>

    </div>
  )
}

export default Signin

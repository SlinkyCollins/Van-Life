import { Link, NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Signin = () => {
    const { pathname } = useLocation();
    return (
        <div className="signinWrapper" style={{ background: "rgba(255, 247, 237, 1)" }}>
            <nav style={{ background: "#FFF7ED", padding: "30px", zIndex: "1000", width: "100%", userSelect: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h1 style={{ fontSize: "25px", fontWeight: "900" }}>
                            <Link to="/" style={{ textDecoration: "none", cursor: "pointer", color: "#000" }}>#VANLIFE</Link>
                        </h1>
                    </div>
                    <ul className="signinlist" style={{ display: "flex", gap: "40px" }}>
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
                                    color: pathname === "/signin" ? "rgba(255, 140, 56, 1)" : "#4D4D4D",
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

            <form className='signinform' style={{ margin: "0" }}>
                <h1 className= "SignInheader" style={{ fontWeight: "700", fontSize: "3.2rem", textAlign: "center", padding: "3rem 2rem 4rem" }}>Sign in to your account</h1>
                <div className="signinInputField" style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "0 auto", paddingBottom: "1rem" }}>
                        <input type="email" placeholder="Email Address" style={{ border: "1px solid rgba(209, 213, 219, 1)", padding: "1.2rem", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", fontSize: "1rem", fontWeight: "400", outline: "none" }} />
                        <input type="password" placeholder="Password" style={{ border: "1px solid rgba(209, 213, 219, 1)", padding: "1.2rem", borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px", fontSize: "1rem", fontWeight: "400", outline: "none" }} />
                        <p style={{ textAlign: "left", fontSize: ".9rem", color: "rgba(255, 140, 56, 1)", cursor: "pointer", padding: "1rem 0 .5rem 0" }}>Forgot your password?</p>
                    </div>
                    <button style={{ background: "rgba(255, 140, 56, 1)", outline: "none", border: "none", color: "rgba(255, 255, 255, 1)", fontSize: "1.2rem", fontWeight: "700", padding: "1.5rem 3rem", width: "80%", borderRadius: "10px", margin: "0 0 4.5rem 0" }}>Sign in</button>
                </div>
                <p className="createAcctPara" style={{ textAlign: "center", fontSize: "1.1rem", fontWeight: "500", padding: "0 0 4rem" }}>Dont have an account? <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "rgba(255, 140, 56, 1)", cursor: "pointer  " }}><Link to="/signup" style={{ textDecoration: "none", cursor: "pointer", color: "rgba(255, 140, 56, 1)" }}>Create one now</Link></span></p>
            </form>

        </div>
    )
}

export default Signin

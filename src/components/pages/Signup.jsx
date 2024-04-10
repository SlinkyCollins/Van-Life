import { Link, NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Signup = () => {
    const { pathname } = useLocation();
    return (
        <div style={{ background: "rgba(255, 247, 237, 1)" }}>
            <nav style={{ background: "#FFF7ED", padding: "30px", zIndex: "1000", width: "100%", userSelect: "none" }}>
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
                                    color: pathname === "/signup" ? "rgba(255, 140, 56, 1)" : "#4D4D4D",
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

            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>Sign up for an account</h1>
            </div>
            <form style={{}}>
                <div style={{ padding: "50px", border: "1px solid #ccc" }}>
                    <div style={{display: 'flex', flexDirection: "column"}}>
                        <label htmlFor="firstName">Firstname</label>
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                    </div>
                    <div style={{display: 'flex', flexDirection: "column"}}>
                        <label htmlFor="">Lastname</label>
                        <input type="text"  placeholder="Last Name"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: "column"}}>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div style={{display: 'flex', flexDirection: "column"}}>
                        <label htmlFor="">Password</label>
                        <input type="password"  placeholder="Password"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: "column"}}>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password"  placeholder="Re-enter Password"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: "row"}}>
                        <input type="checkbox"/>
                        <p>I accept the <span style={{color: "rgba(255, 140, 56, 1)"}}>Terms</span> and <span style={{color: "rgba(255, 140, 56, 1)"}}>Conditions</span></p>
                    </div>
                <button style={{textAlign: "center", background: "rgba(255, 140, 56, 1)", outline: "none", border: "none", padding: "1rem 5rem"}}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
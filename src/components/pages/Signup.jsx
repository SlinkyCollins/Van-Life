import { Link, NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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

            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>Sign up for an account</h1>
            </div>
            <div className="formcontainer" style={{ maxWidth: "40rem", margin: "0 auto", padding: "2.5rem 0 4rem" }}>
                <div style={{ boxShadow: "0 0px 0.1875rem 0 rgba(0, 0, 0, 0.15)", borderRadius: "10px" }}>
                    <form style={{ padding: "3.125rem 3.125rem 2.125rem" }}>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".5rem 0" }}>
                            <label htmlFor="userName" style={{ marginBottom: ".4rem", fontSize: "1rem", fontWeight: "400" }}>Username</label>
                            <div>
                                <span>{<PersonIcon />}</span>
                                <input type="text" id="userName" name="userName" placeholder="Your Name" style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2rem", width: "100%" }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".5rem 0" }}>
                            <label htmlFor="" style={{ marginBottom: ".4rem", fontSize: "1rem", fontWeight: "400" }}>Email</label>
                            <div>
                                <span>{<EmailIcon />}</span>
                                <input type="email" placeholder="Email" style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2rem", width: "100%" }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".5rem 0" }}>
                            <label htmlFor="" style={{ marginBottom: ".4rem", fontSize: "1rem", fontWeight: "400" }}>Password</label>
                            <div>
                                <span>{<LockIcon />}</span>
                                <input type="password" placeholder="Password" style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2rem", width: "100%" }} />
                                <span>{<VisibilityOffIcon/>}</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".5rem 0" }}>
                            <label htmlFor="" style={{ marginBottom: ".4rem", fontSize: "1rem", fontWeight: "400" }}>Confirm Password</label>
                            <div>
                                <span>{<LockIcon />}</span>
                                <input type="password" placeholder="Re-enter Password" style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2rem", width: "100%" }} />
                                <span>{<VisibilityOffIcon/>}</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row", padding: "1rem 0 1.5rem", gap: ".3rem" }}>
                            <input type="checkbox" />
                            <p style={{ fontSize: ".85rem" }}>I accept the <span style={{ color: "rgba(255, 140, 56, 1)" }}>Terms</span> and <span style={{ color: "rgba(255, 140, 56, 1)" }}>Conditions</span></p>
                        </div>
                        <button style={{ textAlign: "center", background: "rgba(255, 140, 56, 1)", outline: "none", border: "none", padding: "1rem 5rem", width: "100%", borderRadius: "5px", color: "#fff", fontSize: "1.1rem", fontWeight: "600" }}>Sign Up</button>
                        <p style={{ textAlign: "center", fontSize: ".8rem", fontWeight: "500", padding: "1.8rem 0 0" }}>Already have an account? <span style={{ fontSize: ".8rem", fontWeight: "700", color: "rgba(255, 140, 56, 1)", cursor: "pointer  " }}><Link to="/signin" style={{ textDecoration: "none", cursor: "pointer", color: "rgba(255, 140, 56, 1)" }}>Sign In</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
import { Link, NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HamburgerMenu from "../HamburgerMenu";

const Signup = () => {
    const { pathname } = useLocation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className="signupWrapper" style={{ background: "rgba(255, 247, 237, 1)" }}>
            <nav style={{ background: "#FFF7ED", padding: "30px", zIndex: "1000", width: "100%", userSelect: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h1 style={{ fontSize: "25px", fontWeight: "900" }}>
                            <Link to="/" style={{ textDecoration: "none", cursor: "pointer", color: "#000" }}>#VANLIFE</Link>
                        </h1>
                    </div>
                    <div className="hamburgerMenu">
                            <HamburgerMenu />
                    </div>
                    <ul className="signuplist" style={{ display: "flex", gap: "40px" }}>
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

            <div className="signupheader" style={{ textAlign: "center", marginTop: "1rem" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>Sign up for an account</h1>
            </div>
            <div className="formcontainer" style={{ maxWidth: "40rem", margin: "0 auto", padding: "2.5rem 1rem 4rem" }}>
                <div style={{ boxShadow: "0 0px 0.1875rem 0 rgba(0, 0, 0, 0.15)", borderRadius: "10px" }}>
                    <form className="signupform" style={{ padding: "2.125rem 3.125rem 2.125rem" }}>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".75rem 0" }}>
                            <label htmlFor="firstName" style={{ marginBottom: ".4rem", fontSize: ".88rem", fontWeight: "400", color: "#595863" }}>First Name</label>
                            <div style={{ position: "relative" }}>
                                <span style={{ position: "absolute", top: "0", left: "0", padding: "5px", border: "1px solid rgba(209, 213, 219, 1)", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", background: "#f9fafb", color: "#6b7280" }}>{<PersonIcon style={{ fontSize: "1.3rem" }} />}</span>
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2.5rem", width: "100%", fontSize: "1.05rem" }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".75rem 0" }}>
                            <label htmlFor="lastName" style={{ marginBottom: ".4rem", fontSize: ".88rem", fontWeight: "400", color: "#595863" }}>Last Name</label>
                            <div style={{ position: "relative" }}>
                                <span style={{ position: "absolute", top: "0", left: "0", padding: "5px", border: "1px solid rgba(209, 213, 219, 1)", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", background: "#f9fafb", color: "#6b7280" }}>{<PersonIcon style={{ fontSize: "1.3rem" }} />}</span>
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2.5rem", width: "100%", fontSize: "1.05rem" }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".75rem 0" }}>
                            <label htmlFor="" style={{ marginBottom: ".4rem", fontSize: ".88rem", fontWeight: "400", color: "#595863" }}>Email Address</label>
                            <div style={{ position: "relative" }}>
                                <span style={{ position: "absolute", top: "0", left: "0", padding: "5px", border: "1px solid rgba(209, 213, 219, 1)", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", background: "#f9fafb", color: "#6b7280" }}>{<EmailIcon style={{ fontSize: "1.3rem" }} />}</span>
                                <input type="email" placeholder="Email" style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2.5rem", width: "100%", fontSize: "1.05rem" }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".75rem 0" }}>
                            <label htmlFor="" style={{ marginBottom: ".4rem", fontSize: ".88rem", fontWeight: "400", color: "#595863" }}>Password</label>
                            <div style={{ position: "relative" }}>
                                <span style={{ position: "absolute", top: "0", left: "0", padding: "5px", border: "1px solid rgba(209, 213, 219, 1)", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", background: "#f9fafb", color: "#6b7280" }}>{<LockIcon style={{ fontSize: "1.3rem" }} />}</span>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                    style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2.5rem", width: "100%", fontSize: "1.05rem" }} />
                                <span onClick={togglePasswordVisibility} style={{ position: "absolute", top: "0", right: "0", color: "#6b7280", padding: "6px 15px 0px 0px", cursor: "pointer" }} title="Toggle password">{passwordVisible ? <VisibilityOffIcon style={{ fontSize: "1.34rem" }} /> : <VisibilityIcon style={{ fontSize: "1.32rem" }} />}</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", padding: ".75rem 0" }}>
                            <label htmlFor="" style={{ marginBottom: ".4rem", fontSize: ".88rem", fontWeight: "400", color: "#595863" }}>Confirm Password</label>
                            <div style={{ position: "relative" }}>
                                <span style={{ position: "absolute", top: "0", left: "0", padding: "5px", border: "1px solid rgba(209, 213, 219, 1)", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", background: "#f9fafb", color: "#6b7280" }}>{<LockIcon style={{ fontSize: "1.3rem" }} />}</span>
                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    onChange={handleConfirmPasswordChange}
                                    value={confirmPassword}
                                    placeholder="Re-enter Password"
                                    style={{ border: "1px solid rgba(209, 213, 219, 1)", borderRadius: "5px", outline: "none", padding: ".5rem 2.5rem", width: "100%", fontSize: "1.05rem" }} />
                                <span onClick={toggleConfirmPasswordVisibility} style={{ position: "absolute", top: "0", right: "0", color: "#6b7280", padding: "6px 15px 0px 0px", cursor: "pointer" }} title="Toggle password">{confirmPasswordVisible ? <VisibilityOffIcon style={{ fontSize: "1.34rem" }} /> : <VisibilityIcon style={{ fontSize: "1.32rem" }} />}</span>
                            </div>
                        </div>
                        <div className="TandCWrapper" style={{ display: 'flex', flexDirection: "row", padding: "1rem 0 1.5rem", gap: ".3rem" }}>
                            <input type="checkbox" />
                            <p style={{ fontSize: ".85rem" }}>I accept the <span style={{ color: "rgba(255, 140, 56, 1)" }}>Terms</span> and <span style={{ color: "rgba(255, 140, 56, 1)" }}>Conditions</span></p>
                        </div>
                        <button className="signupbutton" style={{ textAlign: "center", background: "rgba(255, 140, 56, 1)", outline: "none", border: "none", padding: "1rem 5rem", width: "100%", borderRadius: "5px", color: "#fff", fontSize: "1.1rem", fontWeight: "600" }}>Sign Up</button>
                        <p style={{ textAlign: "center", fontSize: ".8rem", fontWeight: "500", padding: "1.8rem 0 0" }}>Already have an account? <span style={{ fontSize: ".8rem", fontWeight: "700", color: "rgba(255, 140, 56, 1)", cursor: "pointer  " }}><Link to="/signin" style={{ textDecoration: "none", cursor: "pointer", color: "rgba(255, 140, 56, 1)" }}>Sign In</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
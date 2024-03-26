import { Link, NavLink } from "react-router-dom"
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <nav style={{ background: "#FFF7ED", padding: "30px", position: "sticky", top: "0", left: "0", zIndex: "1000", width: "100%", userSelect: "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "25px", fontWeight: "900" }}><Link to="/" style={{ textDecoration: "none", cursor: "pointer", color: "#000" }}>#VANLIFE</Link></h1>
        </div>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li style={{ listStyleType: "none" }}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-info" : null
              }
              style={{ textDecoration: "none", color: "#4D4D4D", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}
            >
              About
            </NavLink>
          </li>

          <li style={{ listStyleType: "none" }}>
            <NavLink
              to="/vans"
              className={({ isActive }) =>
                isActive ? "text-info" : null
              }
              style={{ textDecoration: "none", color: "#4D4D4D", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}
            >
              Vans
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
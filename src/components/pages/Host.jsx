import Navbar2 from "../Navbar2"
import { NavLink, Outlet, useLocation } from "react-router-dom"


const Host = () => {
  const { pathname } = useLocation();

  return (
    <div style={{background: "rgba(255, 247, 237, 1)"}}>
      <Navbar2 />
      <nav style={{position: "sticky", padding: "2rem", top: "0", left: "0", zIndex: "1000", background: "rgba(255, 247, 237, 1)"}}>
        <ul style={{ display: "flex", gap: "2rem", fontWeight: "500", fontSize: "1.125rem", textAlign: "center",alignItems: "center"}}>
          <li style={{ listStyleType: "none" }}>
            <NavLink
              to=""
              style={{
                textDecoration: pathname === "/host" ? "underline" : "none",
                color: pathname === "/host" ? "#000" : "#4D4D4D",
                fontSize: "18px",
                fontWeight: pathname === "/host" ? "800" : "600"
              }}>
              Dashboard
            </NavLink>
          </li>
          <li style={{ listStyleType: "none" }}>
            <NavLink 
            to="income" 
            style={{ 
              textDecoration: pathname === "/host/income" ? "underline" : "none",
              color: pathname === "/host/income" ? "#000" : "#4D4D4D",
              fontSize: "18px",
              fontWeight: pathname === "/host/income" ? "800" : "600"
            }}>
              Income
            </NavLink>
          </li>
          <li style={{ listStyleType: "none" }}>
            <NavLink 
            to="listedvans" 
            style={{ 
              textDecoration: pathname === "/host/listedvans" ? "underline" : "none",
              color: pathname === "/host/listedvans" ? "#000" : "#4D4D4D",
              fontSize: "18px",
              fontWeight: pathname === "/host/listedvans" ? "800" : "600"
              }}>
              Vans
              </NavLink>
          </li>
          <li style={{ listStyleType: "none" }}>
            <NavLink 
            to="reviews" 
            style={{ 
              textDecoration: pathname === "/host/reviews" ? "underline" : "none",
              color: pathname === "/host/reviews" ? "#000" : "#4D4D4D",
              fontSize: "18px",
              fontWeight: pathname === "/host/reviews" ? "800" : "600" 
              }}>
              Reviews
              </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default Host
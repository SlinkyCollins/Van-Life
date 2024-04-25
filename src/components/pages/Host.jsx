import { Link, NavLink, Outlet, useLocation } from "react-router-dom"



const Host = () => {
  const { pathname } = useLocation();


  return (
    <div className="host" style={{ background: "rgba(255, 247, 237, 1)" }}>
      <nav className="navbar1" style={{ background: "#FFF7ED", padding: "30px", width: "100%", userSelect: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h1 style={{ fontSize: "25px", fontWeight: "900" }}>
                        <Link to="/" style={{ textDecoration: "none", cursor: "pointer", color: "#000" }}>#VANLIFE</Link>
                    </h1>
                </div>
                <ul className="list" style={{ display: "flex", gap: "40px" }}>
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

      <nav className="navbar2" style={{ position: "sticky", padding: "2rem", top: "0", left: "0", zIndex: "1000", background: "rgba(255, 247, 237, 1)" }}>
        <ul className="list" style={{ display: "flex", gap: "2rem", fontWeight: "500", fontSize: "1.125rem", textAlign: "center", alignItems: "center", flexWrap: "wrap"}}>
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
                textDecoration: pathname.startsWith("/host/listedvans") ? "underline" : "none",
                color: pathname.startsWith("/host/listedvans") ? "#000" : "#4D4D4D",
                fontSize: "18px",
                fontWeight: pathname.startsWith("/host/listedvans") ? "800" : "600",
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
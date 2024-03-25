import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{background: "#FFF7ED", padding: "30px", position: "fixed", top: "0", left: "0", zIndex: "1000", width: "100%", userSelect: "none"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div>
                <h1 style={{fontSize: "25px", fontWeight: "900"}}><Link to="/" style={{textDecoration: "none", cursor: "pointer", color: "#000"}}>#VANLIFE</Link></h1>
            </div>
            <ul style={{display: "flex", gap: "40px"}}>
                <li style={{listStyleType: "none"}}><Link to="/about" style={{textDecoration: "none", color: "#4D4D4D",  fontSize: "16px", fontWeight: "600", cursor: "pointer"}}>About</Link></li>
                <li style={{listStyleType: "none"}}><Link to="/vans" style={{textDecoration: "none", color: "#4D4D4D",  fontSize: "16px", fontWeight: "600", cursor: "pointer"}}>Vans</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
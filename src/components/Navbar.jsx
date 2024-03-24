

const Navbar = () => {
  return (
    <div style={{background: "#FFF7ED", padding: "30px", position: "fixed", top: "0", left: "0", zIndex: "1000", width: "100%", userSelect: "none"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <h1 style={{fontSize: "25px", fontWeight: "900"}}>#VANLIFE</h1>
            </div>
            <ul style={{display: "flex", gap: "40px"}}>
                <li style={{listStyleType: "none"}}><a href="" style={{textDecoration: "none", color: "#4D4D4D", fontSize: "16px", fontWeight: "600", cursor: "pointer"}}>About</a></li>
                <li style={{listStyleType: "none"}}><a href="" style={{textDecoration: "none", color: "#4D4D4D",  fontSize: "16px", fontWeight: "600", cursor: "pointer"}}>Vans</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
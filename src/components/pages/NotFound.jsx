import { Link } from "react-router-dom"
import Navbar2 from "../Navbar2"


const NotFound = () => {
  return (
    <div style={{background: "rgba(255, 247, 237, 1)"}}>
      <Navbar2/>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "90vh", margin: "0", gap: "70px", textAlign: "left"}}>
        <div style={{padding: "0px 0px 0px 50px"}}>
          <h1 style={{fontWeight: "700", fontSize: "65px", fontFamily: "Inter, sans serif", lineHeight: "80px"}}>Sorry, the page you were looking for was not found.</h1>
        </div>
        <div>
          <Link to="/">
            <button style={{color: "#fff", background: "#000", outline: "none", border: "none", padding: "2rem 32rem", borderRadius: "10px", fontWeight: "700", fontSize: "20px"}}>Return to Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
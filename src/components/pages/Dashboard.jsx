import Listedvancomponent from "../Listedvancomponent"
import van1 from "../pages/van 2.png"
import van2 from "../pages/van 7.png"
import van3 from "../pages/van 5.png"
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="details" style={{ background: "rgba(255, 234, 208, 1)", padding: "2.5rem" }}>
        <h1 style={{ fontSize: "2.8rem", margin: "0rem 0rem 1.7rem" }}>Welcome!</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontWeight: "500", fontSize: "1rem", color: "rgba(77, 77, 77, 1)", margin: "0rem 0rem 1.5rem" }}>Income last <span style={{ textDecoration: "underline", fontSize: "1rem", fontWeight: "700" }}>30 days</span></p>
          <p style={{ fontSize: "1rem", fontWeight: "500" }}><Link to="/host/income" style={{textDecoration: "none", color: "#000"}}>Details</Link></p>
        </div>
        <p className="amount" style={{ fontSize: "3.2rem", fontWeight: "800" }}>$2,260</p>
      </div>

      <div className="review" style={{ background: "rgba(255, 221, 178, 1)", padding: "4rem 2.5rem 4rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: "24px", fontWeight: "700" }}>Review score &nbsp; <IoIosStar style={{ color: "rgba(255, 140, 56, 1)", fontSize: "1.5rem", padding: "0.19rem 0.142rem 0rem 0rem" }} /><span>5.0</span><span style={{ color: "rgba(77, 77, 77, 1)" }}>/5</span></p>
        <p style={{ fontSize: "1rem", fontWeight: "500" }}><Link to="/host/reviews" style={{textDecoration: "none", color: "#000"}}>Details</Link></p>
      </div>

      <div className="vans" style={{ padding: "2.5rem 2.5rem 5rem 2.5rem" }}>
        <div className="vansText" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 0 2.5rem 0" }}>
          <h1>Your listed vans</h1>
          <p style={{ fontSize: "1rem", fontWeight: "500" }}><Link to="/host/listedvans" style={{textDecoration: "none", color: "#000"}}>View all</Link></p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Listedvancomponent
            imageLink={van1}
            title="Modest Explorer"
            price={60}
            edit="Edit"
          />
          <Listedvancomponent
            imageLink={van2}
            title="Beach Bum"
            price={80}
            edit="Edit"
          />
          <Listedvancomponent
            imageLink={van3}
            title="Green Wonder"
            price={70}
            edit="Edit"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
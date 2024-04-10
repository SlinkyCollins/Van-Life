import Listedvancomponent from "../Listedvancomponent"
import van1 from "../pages/van 2.png"
import van2 from "../pages/van 7.png"
import van3 from "../pages/van 5.png"

const Dashboard = () => {
  return (
    <div>
      <div style={{ background: "rgba(255, 234, 208, 1)", padding: "2.5rem" }}>
        <h1 style={{fontSize: "2.8rem", margin: "0rem 0rem 1.7rem"}}>Welcome!</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{fontWeight: "500", fontSize: "1rem", color: "rgba(77, 77, 77, 1)", margin: "0rem 0rem 1.5rem"}}>Income last <span style={{ textDecoration: "underline", fontSize: "1rem", fontWeight: "700"}}>30 days</span></p>
          <p style={{fontSize: "1rem", fontWeight: "500"}}>Details</p>
        </div>
        <p style={{fontSize: "3.2rem", fontWeight: "800"}}>$2,260</p>
      </div>

      <div style={{ background: "rgba(255, 221, 178, 1)", padding: "2.5rem", display: "flex", justifyContent: "space-between" }}>
        <p>Review score &nbsp; <span>5.0</span><span>/5</span></p>
        <p style={{fontSize: "1rem", fontWeight: "500"}}>Details</p>
      </div>

      <div style={{ padding: "2.5rem 2.5rem 5rem 2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 0 2.5rem 0" }}>
          <h1>Your listed vans</h1>
          <p style={{fontSize: "1rem", fontWeight: "500"}}>View all</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
         <Listedvancomponent
          imageLink={van1}
          title="Modest Explorer"
          price={60}
         />
         <Listedvancomponent
          imageLink={van2}
          title="Beach Bum"
          price={80}
         />
         <Listedvancomponent
          imageLink={van3}
          title="Green Wonder"
          price={70}
         />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
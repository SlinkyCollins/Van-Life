import chart1 from "../pages/chart1.png"

const Income = () => {
  return (
    <div className="income">
      <div className="details" style={{ padding: "0rem 2.5rem 4rem 2rem" }}>
        <h1 style={{ fontSize: "2.375rem", fontWeight: "700", margin: "0 0 2rem" }}>Income</h1>
        <p style={{ color: "rgba(77, 77, 77, 1)", fontSize: "1rem", fontWeight: "500", margin: "0 0 1.3rem" }}>Last <span style={{ textDecoration: "underline", fontSize: "1rem", fontWeight: "700" }}>30 days</span></p>
        <p className="amount" style={{ fontSize: "3rem", fontWeight: "800", margin: "0 0 1.5rem" }}>$2,260</p>
      </div>

      <div style={{ width: "100%" }}>
        <img src={chart1} alt="" style={{ width: "100%", objectFit: "cover", padding: "0 3rem 4rem 2rem" }} />
      </div>

      <div className="transactions">
        <div className="text" style={{ display: "flex", justifyContent: "space-between", padding: "2rem" }}>
          <h1>Your Transactions(3)</h1>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "rgba(77, 77, 77, 1)" }}>Last <span style={{ textDecoration: "underline", fontSize: "1rem", fontWeight: "700" }}>30 days</span></p>
        </div>

        <div className="cards" style={{display: "flex", flexDirection: "column", gap: "2rem", padding: "1rem 2rem 4rem"}}>
          <div className="cards-text" style={{background: "#fff", display: "flex", justifyContent: "space-between", padding: "2.5rem"}}>
            <p className="amount" style={{fontWeight: "600", fontSize: "2.25rem"}}>$720</p>
            <p className="date" style={{color: "rgba(77, 77, 77, 1)", fontWeight: "500", fontSize: "1.6rem"}}>1/12/22</p>
          </div>
          <div className="cards-text" style={{background: "#fff", display: "flex", justifyContent: "space-between", padding: "2.5rem"}}>
            <p className="amount" style={{fontWeight: "600", fontSize: "2.25rem"}}>$560</p>
            <p className="date" style={{color: "rgba(77, 77, 77, 1)", fontWeight: "500", fontSize: "1.6rem"}}>10/11/22</p>
          </div>
          <div className="cards-text" style={{background: "#fff", display: "flex", justifyContent: "space-between", padding: "2.5rem"}}>
            <p className="amount" style={{fontWeight: "600", fontSize: "2.25rem"}}>$980</p>
            <p className="date" style={{color: "rgba(77, 77, 77, 1)", fontWeight: "500", fontSize: "1.6rem"}}>23/11/22</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Income
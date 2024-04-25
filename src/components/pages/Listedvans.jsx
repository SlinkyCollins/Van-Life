import van1 from "../pages/van 2.png"
import van2 from "../pages/van 7.png"
import van3 from "../pages/van 5.png"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"


const Listedvans = () => {
  // Assuming vansData is an array of van objects with IDs
  const vansData = [
    { id: 1, name: 'Modest Explorer', imageLink: van1 , price: "60" },
    { id: 2, name: 'Beach Bum', imageLink: van2, price: "80" },
    { id: 3, name: 'Green Wonder', imageLink: van3 , price: "70" },
    // Add more van objects as needed
  ];
  return (
    <div className="ListedVans" style={{ padding: "3rem 2rem 8rem" }}>
      <div className="myVans" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {vansData.map((van) => (
          <div className="innerVanDiv" key={van.id}>
            <Link to={`/host/listedvans/${van.id}`} style={{textDecoration: "none", color: "#000"}}>
              <div className="VanWrapper" style={{ background: "#fff", padding: "2rem", borderRadius: "0.4rem" }}>
                <div className="innerVanWrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="van-content" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <img src={van.imageLink} alt="" style={{ width: "10%", borderRadius: "0.2rem", objectFit: "cover" }} />
                    <div className="van-text">
                      <h1 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "0.5rem" }}>{van.name}</h1>
                      <p style={{ color: "rgba(77, 77, 77, 1)" }}>${van.price}/day</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Listedvans

import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import van1 from "../pages/van 2.png"
import van2 from "../pages/van 7.png"
import van3 from "../pages/van 5.png"


const Vandetail = () => {
  const { id } = useParams(); // Get the van ID from URL params

  // Fetch van details based on ID (replace this with your data fetching logic)
  const vanDetails = {
    id: id,
    name: `Van ${id}: Modest Explorer`,
    description: `Description of Van ${id}`,
    // Add more details as needed
  };
  return (
    <div style={{ padding: "2rem" }}>
      <Link to="/host/listedvans" style={{ color: "#000", textDecoration: "none" }}>
        <div>
          <span style={{ color: "rgba(133, 133, 133, 1)" }}>← </span>
          <span style={{ textDecoration: "underline", fontSize: "1rem", fontWeight: "500" }}>Back to all vans</span>
        </div>
      </Link>

      <div style={{ background: "rgba(255, 255, 255, 1)", padding: "2rem", margin: "3rem 0 3rem", borderRadius: "5px" }}>
        <div style={{ display: "flex", gap: "2.2rem" }}>
          <div>
            <img src={van1} style={{ width: "16rem", borderRadius: "2px" }} />
          </div>
          <div style={{ margin: "1.85rem 0" }}>
            <button style={{
              outline: "none",
              border: "none",
              padding: "10px 25px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "600",
              textAlign: "center",
              background: "rgba(225, 118, 84, 1)",
              color: "#fff",
              marginBottom: "10px"
            }}>Simple</button>
            <h1 style={{ fontSize: "1.625rem", fontWeight: "700", marginBottom: "8px" }}>Modest Explorer</h1>
            <p style={{ fontSize: "1.1875rem", fontWeight: "700" }}>$60<span style={{ fontSize: "1rem", fontWeight: "500" }}>/day</span></p>
          </div>
        </div>

        <nav>
          <ul style={{ listStyleType: "none", display: "flex", gap: "3.8rem", padding: "1.5rem 0rem 2rem" }}>
            <li style={{ color: "rgba(22, 22, 22, 1)", fontSize: "1.15rem", fontWeight: "700", textDecoration: "underline", cursor: "pointer" }}>Details</li>
            <li style={{ color: "rgba(77, 77, 77, 1)", fontSize: "1.15rem", fontWeight: "500", cursor: "pointer" }}>Pricing</li>
            <li style={{ color: "rgba(77, 77, 77, 1)", fontSize: "1.15rem", fontWeight: "500", cursor: "pointer" }}>Photos</li>
          </ul>
        </nav>

        <div>
          <p style={{fontSize: "1rem", fontWeight: "700", marginBottom: "1.3rem"}}>Name: <span style={{fontSize: "1rem", fontWeight: "500"}}>Modest Explorer</span></p>
          <p style={{fontSize: "1rem", fontWeight: "700", marginBottom: "1.3rem"}}>Category: <span style={{fontSize: "1rem", fontWeight: "500"}}> Simple</span></p>
          <p style={{fontSize: "1rem", fontWeight: "700", marginBottom: "1.3rem"}}>Description: <span style={{fontSize: "1rem", fontWeight: "500"}}>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</span></p>
          <p style={{fontSize: "1rem", fontWeight: "700"}}>Visibility: <span style={{fontSize: "1rem", fontWeight: "500"}}>Public</span></p>
            {/* <h3>{vanDetails.name}</h3>
          <p>{vanDetails.description}</p> */}
        </div>
      </div>

    </div>
  )
}

export default Vandetail



// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Vandetail = () => {
//     const { id } = useParams(); // Get the van ID from URL params
//     const [vanDetails, setVanDetails] = useState(null);

//     // Simulate data fetching (replace with your mock data)
//     useEffect(() => {
//         // Simulate fetching van details with a delay (e.g., 1 second)
//         const timeout = setTimeout(() => {
//             // Mock van details data
//             const mockVanDetails = {
//                 id: id,
//                 name: `Van ${id}`,
//                 description: `Description of Van ${id}`,
//                 // Add more details as needed
//             };
//             setVanDetails(mockVanDetails); // Update state with mock van details
//         }, 1000); // Simulate delay for 1 second

//         // Cleanup function to clear the timeout
//         return () => clearTimeout(timeout);
//     }, [id]); // Re-fetch data when the van ID changes

//     // If van details are still being fetched, display a loading message
//     if (!vanDetails) {
//         return <div>Loading...</div>;
//     }

//     // Once van details are fetched, render the details
//     return (
//         <div>
//             {/* Render van details using the vanDetails state */}
//             <h2>Van Details</h2>
//             <h3>{vanDetails.name}</h3>
//             <p>{vanDetails.description}</p>
//         </div>
//     );
// }

// export default Vandetail;

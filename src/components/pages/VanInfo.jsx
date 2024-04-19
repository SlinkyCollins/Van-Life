import { useParams } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import van1 from "../pages/van 2.png"
import van2 from "../pages/van 7.png"
import van3 from "../pages/van 5.png"

const VanInfo = () => {
    const { pathname } = useLocation();
    const { id } = useParams(); // Get the van ID from URL params

     // Array of van data
     const vansData = [
        { id: '1', name: 'Modest Explorer', imageLink: van1, price: "60", buttonTitle: "Simple" },
        { id: '2', name: 'Beach Bum', imageLink: van2, price: "80", buttonTitle: "Rugged" },
        { id: '3', name: 'Green Wonder', imageLink: van3, price: "70", buttonTitle: "Rugged" },
        // Add more van objects as needed
    ];


     // Find the van object with the matching ID
     const van = vansData.find(van => van.id === id);

     if (!van) {
         return <div style={{padding: "5rem 2rem 15.74rem", textAlign: "left"}}>
            <p style={{marginBottom: "2rem", fontWeight: "400", fontSize: "2rem"}}>No van found with ID: <span style={{color: "red", fontWeight: "600"}}>{id}</span></p>
            <Link to="/host/listedvans"><button style={{padding: ".5rem 2rem", fontSize: "1rem"}}>Go back</button></Link>
         </div>;
     }

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
                        <img src={van.imageLink} style={{ width: "16rem", borderRadius: "2px" }} />
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
                        }}>{van.buttonTitle}</button>
                        <h1 style={{ fontSize: "1.625rem", fontWeight: "700", marginBottom: "8px" }}>{van.name}</h1>
                        <p style={{ fontSize: "1.1875rem", fontWeight: "700" }}>${van.price}<span style={{ fontSize: "1rem", fontWeight: "500" }}>/day</span></p>
                    </div>
                </div>

                <nav>
                    <ul style={{ listStyleType: "none", display: "flex", gap: "3.8rem", padding: "1.5rem 0rem 2rem" }}>
                        <NavLink to={`/host/listedvans/${id}`} style={{ textDecoration: "none" }}>
                            <li style={{ color: pathname === `/host/listedvans/${id}` ? "rgba(22, 22, 22, 1)" : "rgba(77, 77, 77, 1)", fontSize: "1.15rem", fontWeight: pathname === `/host/listedvans/${id}` ? "700" : "500", cursor: "pointer", textDecoration: pathname === `/host/listedvans/${id}` ? "underline" : "none" }}>Details</li>
                        </NavLink>
                        <NavLink to={`/host/listedvans/${id}/pricing`} style={{ textDecoration: "none" }}>
                            <li style={{ color: pathname === `/host/listedvans/${id}/pricing` ? "rgba(22, 22, 22, 1)" : "rgba(77, 77, 77, 1)", fontSize: "1.15rem", fontWeight: pathname === `/host/listedvans/${id}/pricing` ? "700" : "500", cursor: "pointer", textDecoration: pathname === `/host/listedvans/${id}/pricing` ? "underline" : "none" }}>Pricing</li>
                        </NavLink>
                        <NavLink to={`/host/listedvans/${id}/photo`} style={{ textDecoration: "none" }}>
                            <li style={{ color: pathname === `/host/listedvans/${id}/photo` ? "rgba(22, 22, 22, 1)" : "rgba(77, 77, 77, 1)", fontSize: "1.15rem", fontWeight: pathname === `/host/listedvans/${id}/photo` ? "700" : "500", cursor: "pointer", textDecoration: pathname === `/host/listedvans/${id}/photo` ? "underline" : "none" }}>Photos</li>
                        </NavLink>
                    </ul>
                </nav>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default VanInfo




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

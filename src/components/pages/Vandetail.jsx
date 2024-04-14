import { useParams } from 'react-router-dom';


const Vandetail = () => {
    const { id } = useParams(); // Get the van ID from URL params

    // Fetch van details based on ID (replace this with your data fetching logic)
  const vanDetails = {
    id: id,
    name: `Van ${id}`,
    description: `Description of Van ${id}`,
    // Add more details as needed
  };
  return (
    <div>
        <div>
            <span>← </span>
            <span style={{textDecoration: "underline"}}>Back to all vans</span>
        </div>

        <div>
            <div>
                <img src="" alt="" />
                <p></p>
                <h1></h1>
                <p></p>
            </div>

            <nav>
                <ul>
                    <li>Details</li>
                    <li>Pricing</li>
                    <li>Photos</li>
                </ul>
            </nav>
        </div>

        <h2>Van Details</h2>
      <h3>{vanDetails.name}</h3>
      <p>{vanDetails.description}</p>
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

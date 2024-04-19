import { useParams, Link } from 'react-router-dom';
import van2 from "../pages/van 2.png"
import van1 from "../pages/van 1.png"
import van3 from "../pages/van 3.jpeg"
import van4 from "../pages/van 4.png"
import van5 from "../pages/van 5.png"
import van7 from "../pages/van 7.png"
import Navbar from "../Navbar.jsx"

const Vansoptioninfo = () => {
    // Define an array of van objects
    const vans = [
        {
            id: 1,
            imageUrl: van2,
            title: 'Modest Explorer',
            price: '$60',
            type: 'Simple',
            details: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        },
        {
            id: 2,
            imageUrl: van7,
            title: "Beach Bum",
            price: '$80',
            type: 'Rugged',
            details: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper."
        },
        {
            id: 3,
            imageUrl: van3,
            title: 'Reliable Red',
            price: '$100',
            type: 'Luxury',
            details: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it."
        },
        {
            id: 4,
            imageUrl: van1,
            title: 'Dreamfinder',
            price: '$65',
            type: 'Simple',
            details: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated."
        },
        {
            id: 5,
            imageUrl: van4,
            title: 'The Cruiser',
            price: '$120',
            type: 'Luxury',
            details: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go."
        },
        {
            id: 6,
            imageUrl: van5,
            title: 'Green Wonder',
            price: '$70',
            type: 'Rugged',
            details: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere."
        },
        // Add more van objects as needed
    ];
    // Retrieve the van ID from URL params
    const { id } = useParams();
    // Find the van object with the matching ID
    const van = vans.find((van) => van.id === parseInt(id));

    if (!van) {
        return <div>
            <Navbar />
            <div style={{ padding: "5rem 2rem 21.13rem", textAlign: "left" }}>
                <p style={{ marginBottom: "2rem", fontWeight: "400", fontSize: "2rem" }}>No van found with ID: <span style={{ color: "red", fontWeight: "600" }}>{id}</span></p>
                <Link to="/vans"><button style={{ padding: ".5rem 2rem", fontSize: "1rem" }}>Go back</button></Link>
            </div>
        </div>;
    }

    return (
        <div style={{ background: "rgba(255, 247, 237, 1)" }}>
            <Navbar />
            <div style={{ padding: "5rem 2rem 2rem 2rem" }}>
                <Link to="/vans" style={{ color: "#000", textDecoration: "none" }}>
                    <div style={{ textAlign: "left" }}>
                        <span style={{ color: "rgba(133, 133, 133, 1)" }}>← </span>
                        <span style={{ textDecoration: "underline", fontSize: "1rem", fontWeight: "500" }}>Back to all vans</span>
                    </div>
                </Link>
                <div style={{ textAlign: "center" }}>
                    <div style={{ marginTop: "3rem" }}>
                        <img src={van.imageUrl} alt={van.title} style={{ width: "100%", borderRadius: "6px" }} />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <button
                            style={{
                                outline: "none",
                                border: "none",
                                padding: "10px 25px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: "600",
                                textAlign: "center",
                                backgroundColor: "rgba(225, 118, 84, 1)",
                                color: "rgba(255, 234, 208, 1)",
                                margin: "3rem 0 1.5rem"
                            }}>
                            {van.type}
                        </button>
                        <h2 style={{ fontWeight: "700", fontSize: "2.5rem" }}>{van.title}</h2>
                        <p style={{ margin: "1rem 0 1rem", fontWeight: "700", fontSize: "1.3rem" }}>{van.price}<span style={{ fontWeight: "500", fontSize: "1.1rem" }}>/day</span></p>
                        <div style={{ width: "100%" }}>
                            <p style={{ fontWeight: "500", fontSize: "1rem", lineHeight: "1.4375rem" }}>{van.details}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button
                                style={{
                                    outline: "none",
                                    border: "none",
                                    width: "100%",
                                    padding: "1.6rem 0",
                                    borderRadius: "5px",
                                    color: "rgba(255, 255, 255, 1)",
                                    background: "rgba(255, 140, 56, 1)",
                                    fontWeight: "700",
                                    fontSize: "1.3rem",
                                    margin: "2rem 0 2rem",
                                }}>
                                Rent this van
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vansoptioninfo;
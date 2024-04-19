import { useParams, Link } from 'react-router-dom';
import van2 from "../pages/van 2.png"
import van1 from "../pages/van 1.png"
import van3 from "../pages/van 3.jpeg"
import van4 from "../pages/van 4.png"
import van5 from "../pages/van 5.png"
import van7 from "../pages/van 7.png"

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
    return <div>Van not found</div>;
  }

  return (
    <div>
      {/* Display the van details */}
      <img src={van.imageUrl} alt={van.title} />
      <h2>{van.title}</h2>
      <p>Type: {van.type}</p>
      <p>Price: {van.price}</p>
      <p>{van.details}</p>

      {/* Rent this van button */}
      <button>Rent this van</button>

      {/* Go back to all vans button */}
      <Link to="/vans">Go back to all vans</Link>
    </div>
  );
};

export default Vansoptioninfo;
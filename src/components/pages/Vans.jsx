import "../Vans.css"
import Card from "../Card.jsx"
import van2 from "../pages/van 2.png"
import van1 from "../pages/van 1.png"
import van3 from "../pages/van 3.jpeg"
import van4 from "../pages/van 4.png"
import van5 from "../pages/van 5.png"
import van7 from "../pages/van 7.png"
import Navbar from "../Navbar.jsx"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Vans = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const filteredVans = selectedCategory ? vans.filter(van => van.type === selectedCategory) : vans;

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="VansContainer">
      <Navbar />
      <h1 className="header">Explore our van options</h1>
      <div className="navigation">
        <div className="buttonContainer">
          <button 
          id="simple" 
          className="category-button"
          onClick={() => handleFilterClick('Simple')}
          style={{
            backgroundColor: selectedCategory === 'Simple' ? '#e17654' : '',
            color: selectedCategory === 'Simple' ? '#ffead0' : ''
          }}
          >
          Simple
          </button>
          <button 
          id="luxury" 
          className="category-button"
          onClick={() => handleFilterClick('Luxury')}
          style={{
            backgroundColor: selectedCategory === 'Luxury' ? '#161616' : '',
            color: selectedCategory === 'Luxury' ? '#ffead0' : ''
          }}
          >
          Luxury
          </button>
          <button 
          id="rugged" 
          className="category-button"
          onClick={() => handleFilterClick('Rugged')}
          style={{
            backgroundColor: selectedCategory === 'Rugged' ? '#115e59' : '',
            color: selectedCategory === 'Rugged' ? '#ffead0' : ''
          }}
          >
          Rugged
          </button>
        </div>
        <div className="filter-text">
          <p onClick={clearFilters}>Clear filters</p>
        </div>
      </div>

      <div
      className="VanCardContainer"
        style=
        {{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gridGap: "2rem",
          padding: "5rem 3.25rem 5rem 3.25rem"
        }}>
        {filteredVans.map((van) => (
          <Link key={van.id} to={`/vans/${van.id}`} style={{textDecoration: "none", color: "inherit"}}>
            <Card {...van} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Vans
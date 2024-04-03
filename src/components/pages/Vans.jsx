import "../Vans.css"
import Card from "../Card.jsx"
import van2 from "../pages/van 2.png"
import van1 from "../pages/van 1.png"
import van3 from "../pages/van 3.jpeg"
import van4 from "../pages/van 4.png"
import van5 from "../pages/van 5.png"
import van7 from "../pages/van 7.png"


const Vans = () => {
  return (
    <div>
      <h1 className="header">Explore our van options</h1>
      <div className="navigation">
        <div className="buttonContainer">
          <button id="simple">Simple</button>
          <button id="luxury">Luxury</button>
          <button id="rugged">Rugged</button>
        </div>
        <div className="filter-text">
          <p>Clear filters</p>
        </div>
      </div>

      <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
            gridGap: "10px",
            margin: "80px 50px 80px 50px"
            }}>
        <Card
          imageUrl={van2}
          title="Modest Explorer"
          price="$60"
          type="Simple"
        />
        <Card
          imageUrl={van7}
          title="Beach Bum"
          price="$80"
          type="Rugged"
        />
        <Card
          imageUrl={van3}
          title="Reliable Red"
          price="$100"
          type="Luxury"
        />
        <Card
          imageUrl={van1}
          title="Dreamfinder"
          price="$65"
          type="Simple"
        />
        <Card
          imageUrl={van4}
          title="The Cruiser"
          price="$120"
          type="Luxury"
        />
        <Card
        imageUrl={van5}
        title="Green Wonder"
        price="$70"
        type="Rugged"
      />
      </div>
    </div>
  )
}

export default Vans
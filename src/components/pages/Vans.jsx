import "../Vans.css"
import Card from "../Card.jsx"


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
          imageUrl="../src/assets/van 2.png"
          title="Modest Explorer"
          price="$60"
          type="Simple"
        />
        <Card
          imageUrl="../src/assets/van 7.png"
          title="Beach Bum"
          price="$80"
          type="Rugged"
        />
        <Card
          imageUrl="../src/assets/van 3.jpeg"
          title="Reliable Red"
          price="$100"
          type="Luxury"
        />
        <Card
          imageUrl="../src/assets/van 1.png"
          title="Dreamfinder"
          price="$65"
          type="Simple"
        />
        <Card
          imageUrl="../src/assets/van 4.png"
          title="The Cruiser"
          price="$120"
          type="Luxury"
        />
        <Card
        imageUrl="../src/assets/van 5.png"
        title="Green Wonder"
        price="$70"
        type="Rugged"
      />
      </div>
    </div>
  )
}

export default Vans
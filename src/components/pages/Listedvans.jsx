import Listedvancomponent from "../Listedvancomponent"
import van1 from "../pages/van 2.png"
import van2 from "../pages/van 7.png"
import van3 from "../pages/van 5.png"


const Listedvans = () => {
  return (
    <div style={{ padding: "3rem 2rem 8rem" }}>
      <div style={{ paddingBottom: "3rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>Your listed vans</h1>
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "2.5rem"}}>
        <Listedvancomponent
          imageLink={van1}
          title="Modest Explorer"
          price={60}
        />
        <Listedvancomponent
          imageLink={van2}
          title="Beach Bum"
          price={80}
        />
        <Listedvancomponent
          imageLink={van3}
          title="Green Wonder"
          price={70}
        />
      </div>
    </div>
  )
}

export default Listedvans
import aboutImage from "../pages/van life bg 2.png"

const About = () => {
  return (
    <>
        <img src={aboutImage} style={{width: "100%", height: "680px", objectFit: "cover"}} />
        <div style={{padding: "50px"}}>
          <h1 style={{fontSize: " 70px", fontWeight: "700", lineHeight: "70px", margin: "50px 0px 0px"}}>Do not squeeze in a sedan when you could relax in a van.</h1>
          <p style={{fontSize: "22px", fontWeight: "500px", lineHeight: "28px", margin: "80px 0px 50px"}}>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
          <p style={{fontSize: "22px", fontWeight: "500px", lineHeight: "28px"}}> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</p>
        </div>

        <div style={{background: "rgba(255, 204, 141, 1)", padding: "100px", margin: "50px 50px 100px 50px", borderRadius: "10px"}}>
          <p style={{fontSize: "54px", fontWeight: "700", lineHeight: "40px"}}>Your destination is waiting. <br /><br /> Your van is ready.</p>
          <button style={{background: "#000", color: "#fff", padding: "30px 40px", outline: "none", border: "none", borderRadius: "10px", margin: "100px 0px 0px 0px", fontSize: "30px", fontWeight: "600", cursor: "pointer"}}>Explore our vans</button>
        </div>
    </>
  )
}

export default About
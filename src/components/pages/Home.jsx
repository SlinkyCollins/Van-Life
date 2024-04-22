import "../Home.css"
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="main-container">
          <div className="bg-image"></div>

          <div className="text-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.
              <br />
              Rent the perfect van to make your perfect road trip.
            </p>
            <Link to="/vans">
              <button>Find your van</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
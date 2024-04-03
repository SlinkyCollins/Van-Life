import "../Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
     <div>
        <div className="main-container">
                <div className="bg-image"></div>

                <div className="text-container">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife movement.
                        <br />
                        Rent the perfect van to make your perfect road trip.
                    </p>
                    <Link to="/Vans"><button>Find your van</button></Link>
                </div>
          </div>
     </div>
    </>
  )
}

export default Home
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import About from "./components/pages/About"
import Vans from "./components/pages/Vans"
import Home from "./components/pages/Home"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Vans" element={<Vans/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

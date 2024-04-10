import Footer from "./components/Footer"
import { Routes, Route, Navigate } from "react-router-dom"
import About from "./components/pages/About"
import Vans from "./components/pages/Vans"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import Host from "./components/pages/Host"
import Signin from "./components/pages/Signin"
import Income from "./components/pages/Income"
import Dashboard from "./components/pages/Dashboard"
import Listedvans from "./components/pages/Listedvans"
import Review from "./components/pages/Review"
import Signup from "./components/pages/Signup"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Navigate to ="home" />} />
        <Route path="host" element={<Host/>}>
          <Route path="" element={<Dashboard/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path="listedvans" element={<Listedvans/>}/>
          <Route path="reviews" element={<Review/>}/>
        </Route> 
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

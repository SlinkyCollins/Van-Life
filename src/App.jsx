import Footer from "./components/Footer"
import { Routes, Route, Navigate } from "react-router-dom"
import About from "./components/pages/About"
import Vans from "./components/pages/Vans"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import Host from "./components/pages/Host"
import Signin from "./components/pages/Signin"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Navigate to ="home" />} />
        <Route path="/host" element={<Host/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

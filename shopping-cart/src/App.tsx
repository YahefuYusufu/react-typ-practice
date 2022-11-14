import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </>
  )
}

export default App

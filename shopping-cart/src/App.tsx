import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App

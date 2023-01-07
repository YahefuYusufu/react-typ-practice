import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Conventer, Gallery, Home, Modal, Quiz, UserSearch } from "./pages"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conventer" element={<Conventer />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/user" element={<UserSearch />} />
      </Routes>
    </>
  )
}

export default App

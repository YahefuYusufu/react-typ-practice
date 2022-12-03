import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/navbar/Navbar"
import { Conventer } from "./pages/converter/Conventer"
import { Home } from "./pages/home/Home"
import { Modal } from "./pages/modal/Modal"
import { Gallery } from "./pages/photos/Gallery"
import { Quiz } from "./pages/quiz/Quiz"
import { UserSearch } from "./pages/userSearch/UserSearch"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conventer" element={<Conventer />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/gallary" element={<Gallery />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/user" element={<UserSearch />} />
      </Routes>
    </>
  )
}

export default App

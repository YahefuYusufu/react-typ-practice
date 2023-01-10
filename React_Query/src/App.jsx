import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { SuperHeroes } from "./components/SuperHeroes"
import { RQHeroes } from "./components/RQHeroes"
import { Home } from "./components/Home"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/superheroes">Triditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/superheroes" element={<SuperHeroes />} />
          <Route path="/rq-heroes" element={<RQHeroes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

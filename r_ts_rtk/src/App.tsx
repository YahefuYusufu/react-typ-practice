import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { Cake } from "./feature/cake/Cake"
import { IceCreame } from "./feature/icecreame/IceCreame"
import { User } from "./feature/user/User"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cake />
      <IceCreame />
      <User />
    </div>
  )
}

export default App

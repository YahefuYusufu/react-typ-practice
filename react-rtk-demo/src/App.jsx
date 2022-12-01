import { useState } from "react"
import "./App.css"
import { Cake } from "./feature/cake/Cake"
import { IceCreame } from "./feature/icecreame/IceCreame"
import { User } from "./feature/user/User"

function App() {
  return (
    <div className="App">
      <Cake />
      <IceCreame />
      <User />
    </div>
  )
}

export default App

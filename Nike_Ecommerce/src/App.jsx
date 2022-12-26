import React from "react"
import { heroapi, popularsales, toprateslaes } from "./data/data.js"
import { Hero, Sales } from "./components"

const App = () => {
  return (
    <>
      <main className="">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  )
}

export default App

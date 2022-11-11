import React from "react"
import { AddToList } from "./components/AddToList"
import List from "./components/List"

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}
const App = () => {
  const [people, setPeople] = React.useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://s.yimg.com/xe/i/us/sp/v/nba/players_l/20121217/3118.jpg",
    },
  ])

  return (
    <div className="container flex items-center flex-col mx-auto">
      <h1 className="text-4xl text-center font-bold text-gray-800">
        People invited to my party
      </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App

import React from "react"
import { IState as Props } from "../App"

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  people: Props["people"]
}

const AddToList: React.FC<IProps> = () => {
  const [input, setInput] = React.useState({
    name: "",
    age: "",
    img: "",
    note: "",
  })

  return <div></div>
}

export default AddToList

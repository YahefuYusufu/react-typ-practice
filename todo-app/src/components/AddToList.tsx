import React, { HTMLInputTypeAttribute } from "react"
import { IState as Props } from "../App"

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  people: Props["people"]
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState({
    name: "",
    age: "",
    img: "",
    note: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = () => {
    if (!input.name || !input.age || !input.img) return

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ])

    // setOpen(false)
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    })
  }

  return (
    <>
      <div className="w-96 m-4 mb-6">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            className="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            className="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
            name="age"
            placeholder="Age"
            onChange={handleChange}
          />
          <input
            type="text"
            className="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
            name="img"
            placeholder="Image URL"
            onChange={handleChange}
          />
          <textarea
            className="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
            name="note"
            placeholder="Note"
            onChange={handleChange}
          />
          <button
            className="w-full p-4 cursor bg-blue-700 text-white rounded-2xl"
            onClick={handleClick}
          >
            Push
          </button>
        </div>
      </div>
    </>
  )
}

export default AddToList

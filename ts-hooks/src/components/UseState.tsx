import React from "react"

const UseState = () => {
  const [arr, arrSet] = React.useState<number[]>([])
  const [name, nameSet] = React.useState<string | null>(null)
  return (
    <div>
      <div>
        <h2>useState</h2>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to Array
        </button>
        {arr}
      </div>
      <div>
        <button onClick={() => nameSet("prg")}>Set Name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  )
}

export default UseState

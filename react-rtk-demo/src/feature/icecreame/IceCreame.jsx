import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./iceCreameSlice"

export const IceCreame = () => {
  const [value, setValue] = React.useState(1)
  const numOfIceCreame = useSelector((state) => state.iceCreame.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Number Of IceCreame - {numOfIceCreame}</h2>
      <button onClick={() => dispatch(ordered())}>Buy IceCreame</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock IceCreame
      </button>
    </>
  )
}

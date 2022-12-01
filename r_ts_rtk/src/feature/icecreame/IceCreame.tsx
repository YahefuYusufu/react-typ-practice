import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hoos"
import { ordered, restocked } from "./IceCreameSlice"

export const IceCreame = () => {
  const [value, setValue] = React.useState(1)
  const numOfIceCreame = useAppSelector(
    (state) => state.iceCreame.numOfIceCreams
  )
  const dispatch = useAppDispatch()

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

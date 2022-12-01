import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "../cake/cakeSlice"

export const Cake = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Number Of Cakes - {numOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Buy Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </>
  )
}

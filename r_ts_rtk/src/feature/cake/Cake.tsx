// import { useSelector, useDispatch } from "react-redux"
import { useAppDispatch, useAppSelector } from "../../app/hoos"
import { ordered, restocked } from "./cakeSlice"

export const Cake = () => {
  const numOfCake = useAppSelector((state) => state.cake.numOfCakes)
  const dispatch = useAppDispatch()

  return (
    <>
      <h2>Number Of Cakes - {numOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Buy Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </>
  )
}

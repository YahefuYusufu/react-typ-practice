import React from "react"

const initialState = { counter: 0 }

type ACTIONTYPE =
  | {
      type: "increment"
      payload: number
    }
  | {
      type: "decrement"
      payload: number
    }

const counterReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload }
    case "decrement":
      return { ...state, counter: state.counter - action.payload }
    default:
      throw new Error("Bad action type")
  }
}

const UseReducer = () => {
  const [state, dispatch] = React.useReducer(counterReducer, initialState)

  return (
    <>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </>
  )
}

export default UseReducer

import { useReducer } from "react"

type actionProps = {
  type: string
  payload?: number
}

const initialState = { count: 0 }
const counterReducer = (state: typeof initialState, action: actionProps) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return initialState
    default:
      return state
  }
}

const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const Decrement = () => {
    dispatch({ type: "decrement" })
  }
  const Increment = () => {
    dispatch({ type: "increment" })
  }

  const Rest = () => {
    dispatch({ type: "reset" })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      <div className="w-48 h-34 bg-white rounded-2xl text-center md:w-96 md:h-80 ">
        <h2>Counter App</h2>
        <div className="flex justify-between items-center h-16 px-4 border-b border-zinc-200">
          <button
            className="bg-zinc-200 rounded-full w-8 h-8"
            onClick={Decrement}
          >
            -
          </button>
          <span className="text-2xl">{state.count}</span>
          <button
            className="bg-zinc-200 rounded-full w-8 h-8"
            onClick={Increment}
          >
            +
          </button>
        </div>
        <button
          className="flex justify-center items-center h-16 p-9 w-2 mx-auto mt-4 bg-orange-600 hover:bg-slate-400 cursor:default rounded-full md:mt-18 "
          onClick={Rest}
        >
          Rest
        </button>
      </div>
    </div>
  )
}

export default App

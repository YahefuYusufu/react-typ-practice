import EvenMore from "./components/EvenMore"
import CustomHooks from "./components/CustomHooks"
import UseContext from "./components/UseContext"
import UseEffect from "./components/UseEffect"
import UseReducer from "./components/UseReducer"
import UseRef from "./components/UseRef"
import UseState from "./components/UseState"

function App() {
  return (
    <div>
      <h1>Even more React component TS stuff</h1>
      <EvenMore />
      <h1>Custom Hooks</h1>
      <CustomHooks />
      <h1>Use Ref</h1>
      <UseRef />
      <h1>Use Reducer</h1>
      <UseReducer />
      <h1>Use Effect</h1>
      <UseEffect />
      <h1>Use State</h1>
      <UseState />
      <h1>Use Context</h1>
      <UseContext />
    </div>
  )
}

export default App

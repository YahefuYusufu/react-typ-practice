import { createContext } from "react"

const initialState = {
  first: "prg",
  last: "yakup",
}

export type UserState = typeof initialState
const context = createContext<typeof initialState>(initialState)

export default context

import React from "react"
import UserContext, { UserState } from "../store"

const ConsumerComponent = () => {
  const user = React.useContext(UserContext)
  return (
    <div>
      <h2>ConsumerComponent</h2>
      <p>{user.first}</p>
      <p>{user.last}</p>
    </div>
  )
}
const UseContext = () => {
  const [user, setUser] = React.useState<UserState>({
    first: "PRG",
    last: "Doe",
  })
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => setUser({ first: "John", last: "Doe" })}>
        Change User
      </button>
    </UserContext.Provider>
  )
}

export default UseContext

import React from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

const AuthContext = React.createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = React.useState(null)

  const signIn = (email, password) => {}

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export function UserAuth() {
  return React.useContext(UserAuth)
}

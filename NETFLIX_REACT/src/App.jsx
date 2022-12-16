import { Route, Routes } from "react-router-dom"
import { AuthContextProvider } from "./context/authContext"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { Login } from "./pages/Login"
import Signup from "./pages/SignUp"
import { Account } from "./pages/Account"
import { ProtectedRoute } from "./components/ProtectedRoute"

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App

import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../contenxt/authContext"

const style = {
  container: "flex justify-between items-center p-4 z-[100] w-full absolute",
  header: "text-4xl font-bold  text-red-600  cursor-pointer ",
  signIn: "text-white pr-4",
  signUp: "bg-red-600 px-6 py-2 rounded cursor-pointer  text-white",
}
export const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  console.log(user)

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={style.container}>
      <Link to="/">
        <h1 className={style.header}>NETFKIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className={style.signIn}>Account</button>
          </Link>
          <button onClick={handleLogOut} className={style.signUp}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className={style.signIn}>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className={style.signUp}>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  )
}

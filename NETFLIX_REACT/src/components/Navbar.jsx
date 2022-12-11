import React from "react"

const style = {
  container: "flex justify-between items-center p-4 z-[100] w-full absolute",
  header: "text-4xl font-bold  text-red-600  cursor-pointer ",
  signIn: "text-white pr-4",
  signUp: "bg-red-600 px-6 py-2 rounded cursor-pointer  text-white",
}
export const Navbar = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>NETFKIX</h1>
      <div>
        <button className={style.signIn}>Sign In</button>
        <button className={style.signUp}>Sign Up</button>
      </div>
    </div>
  )
}

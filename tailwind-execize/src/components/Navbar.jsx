import React from "react"

const Navbar = () => {
  return (
    <nav className="flex min-h-screen space-x-2">
      <div className="w-1/4 mt-2 mb-2 bg-slate-600 rounded-2xl">sidebar</div>
      <div className="w-3/4 bg-orange-400">navbar</div>
    </nav>
  )
}

export default Navbar

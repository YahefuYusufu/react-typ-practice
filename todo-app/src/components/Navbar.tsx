import React, { ReactNode } from "react"
import * as data from "../links.json"

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type linksProps = {
  label: string
  href: string
  icons: ReactNode
}

export const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"></div>
      </div>
    </div>
  )
}

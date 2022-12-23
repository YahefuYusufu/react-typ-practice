import React from "react"

import { navLinks } from "../constants"
import { close, logo, menu } from "../assets"

const style = {
  nav: "w-full flex py-6 justify-between items-center navbar",
  img: "w-[124px] h-[32px]",
  ul: "list-none sm:flex hidden justify-end items-center flex-1",
  li: "font-poppins font-normal cursor-pointer text-[16px]",
  //   toggle
  toggleContainer: "sm:hidden flex flex-1 justify-end items-center",
  toggleImg: "w-[28px] h-[28px] object-contain",
  toggleDiv:
    " p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar",
  toggleUl: "list-none flex justify-end items-start flex-1 flex-col",
  toggleLi: "font-poppins font-medium cursor-pointer text-[16px]",
}
const Navbar = () => {
  const [active, setActive] = React.useState("Home")
  const [toggle, setToggle] = React.useState(false)

  return (
    <nav className={style.nav}>
      <img src={logo} alt="logo" className={style.img} />
      <ul className={style.ul}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${style.li} ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* small screen */}
      <div className={style.toggleContainer}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={style.toggleImg}
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? "hidden" : "flex"}${style.toggleDiv}`}>
          <ul className={style.toggleUl}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${style.toggleLi} ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from "react"
import { menus } from "../data/data"
import { GiRhinocerosHorn } from "react-icons/gi"
import { Link } from "react-router-dom"

const style = {
  nav: "absolute flex gap-6 m-4",
  iconDiv: "py-7 flex justify-center",
  rhinoIcon: "cursor-pointer animate-bounce",
  links: "mt-4 flex flex-col gap-4 relative",
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <nav className={style.nav}>
      <div
        className={`custom-img text-white h-screen rounded-2xl  ${
          open ? "w-36" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className={style.iconDiv}>
          <GiRhinocerosHorn
            size={26}
            className={style.rhinoIcon}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={style.links}>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#36a4e9] rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-[#0f3f5d] font-semibold whitespace-pre text-zinc-50 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React, { FC } from "react"
import { menus } from "../data/data"
import { Link } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const styles = {
  header: "absolute w-full h-[76px] bg-blue-600 rounded px-4 ",
  nav: "max-w-[1240px] mx-auto px-4 flex justify-between  items-center h-full",
  h1: "text-4xl text-white",
  ul: "flex items-center gap-4",
  li: "text-white",
  items: "hidden md:flex gap-4",
  toggle:
    "absolute right-2 z-10 mt-80 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center",
  toggleIcons:
    "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
}

const Navbar3: FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const showSidebar = () => setOpenMenu(!openMenu)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <h1 className={styles.h1}>PRG</h1>
        </div>
        <div className={styles.items}>
          <ul className={styles.ul}>
            {menus.map((menu, i) => (
              <Link to={menu?.link} key={i}>
                <li className={styles.li}>{menu?.name}</li>
              </Link>
            ))}
            <button className="ml-4">BTN</button>
          </ul>
        </div>
        {/* Hamburger menu */}
        <div onClick={showSidebar} className="block md:hidden">
          {openMenu ? (
            <AiOutlineClose size={38} className={styles.toggleIcons} />
          ) : (
            <AiOutlineMenu size={38} className={styles.toggleIcons} />
          )}
        </div>
        {/* Mobile menu */}

        <div
          id="dropdownMenuButton1ds"
          className={openMenu ? `${styles.toggle}` : "absolute left-[-100%]"}
        >
          {openMenu && (
            <div className="">
              <ul className="py-3 space-y-4">
                {menus.map((menu, i) => (
                  <Link to={menu?.link} key={i}>
                    <li className="block px-4 py-2 text-sm text-gray-700">
                      {menu?.name}
                    </li>
                  </Link>
                ))}
                <button className="ml-4">BTN</button>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar3

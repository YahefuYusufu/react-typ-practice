import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState("trasparent")
  const [textColor, setTextColor] = useState("white")

  const handeleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff")
        setTextColor("#000000")
      } else {
        setColor("transparent")
        setTextColor("#ffffff")
      }
    }
    window.addEventListener("scroll", changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 bg-slate-500 rounded-xl w-full z-10 ease-in duration-300"
    >
      <div className="max-w[1280px]  m-auto flex justify-between items-center p-4 text-black">
        <Link to="/">
          <h1
            style={{ color: `${textColor}` }}
            className="text-4xl font-bold font-extra-bold sm:text-5x  hover:scale-125 transition duration-300 ease-in-out"
          >
            PrG
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex ">
          <li className="p-4 hover:scale-125 transition duration-300 ease-in">
            <a href="/" aria-current="page">
              Home
            </a>
          </li>
          <li className="p-4 hover:scale-125 transition duration-300 ease-in">
            <a href="/conventer">Conventer</a>
          </li>
          <li className="p-4 hover:scale-125 transition duration-300 ease-in-out">
            <a href="/modal">Modal</a>
          </li>
          <li className="p-4 hover:scale-125 transition duration-300 ease-in-out">
            <a href="/gallary">Gallary</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handeleNav} className="block sm:hidden  z-10">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-700 test-center ease-in duration-700"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-700 test-center ease-in duration-700"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-blue-500">
              <a href="/" aria-current="page">
                Home
              </a>
            </li>
            <li className="p-4 text-4xl hover:text-blue-500">
              <a href="/conventer">Conventer</a>
            </li>
            <li className="p-4 text-4xl hover:text-blue-500">
              <a href="/modal">Modal</a>
            </li>
            <li className="p-4 text-4xl hover:text-blue-500">
              <a href="/gallary">Gallary</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

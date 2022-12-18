import { BsSun, BsFillMoonFill } from "react-icons/bs"
import { Link, Outlet } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHook"
import { toggleTheme } from "../../features/theme/themeSlice"

export const Header = () => {
  const { darkTheme } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  const toggleHandler = () => dispatch(toggleTheme())
  return (
    <>
      <header className="mb-20">
        <nav className="border-b border-gray-200 border-opacity-25 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Movies
              </span>
            </Link>

            <div className="flex items-center lg:order-2">
              {darkTheme.theme && (
                <BsSun
                  onClick={() => toggleHandler()}
                  className="hover:opacity-50 cursor-pointer"
                />
              )}
              {!darkTheme.theme && (
                <BsFillMoonFill
                  onClick={() => toggleHandler()}
                  className="hover:opacity-50 cursor-pointer"
                />
              )}
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
    </>
  )
}

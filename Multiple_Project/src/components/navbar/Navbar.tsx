import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <ul>
            <li>
              <a href="/" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/conventer">Conventer</a>
            </li>
            <li>
              <a href="/modal">Modal</a>
            </li>
            <li>
              <a href="/gallary">Gallary</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

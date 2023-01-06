import React from "react"
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai"

const styles = {
  header:
    "w-11/12 xl:w-4/5 mx-auto flex justify-between py-5 bg-white shadow-lg my-4 rounded-xl",
  h1: "font-semibold text-2xl ml-4 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer",
  span: "text-gray-400",
  ul: "flex space-x-8 text-gray-500 hidden md:flex",
  li: "hover:text-cyan-600 font-bold cursor-pointer transition duration-300 ease-in-out transform hover:translate-y-1",
  icons: "flex space-x-4 text-gray-500 mr-4 ",
  a: "hover:text-cyan-600 font-bold cursor-pointer transition duration-300 ease-in-out transform hover:translate-y-1",
}

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        E_ <span className={styles.span}>Commerce</span>
      </h1>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Products</li>
          <li className={styles.li}>Servise</li>
          <li className={styles.li}>About</li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <a href="#">
          <AiOutlineSearch className={styles.a} size={"1.5rem"} />
        </a>
        <a href="#">
          <AiOutlineHeart size={"1.5rem"} className={styles.a} />
        </a>
        <a href="#">
          <AiOutlineShoppingCart size={"1.5rem"} className={styles.a} />
        </a>
      </div>
    </header>
  )
}

export default Navbar

import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const styles = {
  section: "w-11/12 xl:w-4/5 h-[360px] mx-auto bg-stone-200 rounded-2xl",
  container: "w-full h-full flex justify-between items-center",
  div1: "w-11/12 xl:w-1/2 p-5 space-y-5",
  h1: "text-5xl font-bold text-stone-500",
  div2: "bg-white rounded-full flex items-center space-x-2 px-5 py-2",
  div3: "hidden md:flex p-5",
  img: "w-[400px] h-[300px] border-8 border-gray-500",
}

const Hero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h1 className={styles.h1}>
            find the perfect gift for everyone on your list.
          </h1>
          <div className={styles.div2}>
            <AiOutlineSearch size={"1.2rem"} />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-0"
            />
          </div>
        </div>
        <div className={styles.div3}>
          <img
            src="../../public/images/cout.jpg"
            alt="img"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

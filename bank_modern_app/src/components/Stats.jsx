import React from "react"
import { stats } from "../constants"
import styles from "../style"

const style = {
  section: "flex-row flex-wrap sm:mb-20 b-6",
  div: "flex-1 flex justify-start items-center flex-row m-3",
  h4: "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white",
  p: "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3",
}
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} ${style.section}`}>
      {stats.map((stat) => (
        <div key={stat.id} className={style.div}>
          <h4 className={style.h4}>{stat.value}</h4>
          <p className={style.p}>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats

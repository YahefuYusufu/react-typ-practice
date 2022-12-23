import React from "react"
import style from "../style"
import { discount } from "../assets"

const styleLocal = {
  section: "flex md:flex-row flex-col",
  heroContainer: "flex-col xl:px-0 sm:px-16 px-6",
  heroBox:
    "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2",
  heroImg: "w-[32px] h-[32px]",
  heroSpan: "text-white",
}
const Hero = () => {
  return (
    <section id="home" className={`${styleLocal.section}${style.paddingY}`}>
      <div className={`flex-1 ${style.flexStart} ${styleLocal.heroContainer}`}>
        <div className={styleLocal.heroBox}>
          <img src={discount} alt="discount" className={styleLocal.heroImg} />
          <p className={`${style.paragraph} ml-2`}>
            <span className={styleLocal.heroSpan}>20%</span>
            <span className={styleLocal.heroSpan}>1 Month</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

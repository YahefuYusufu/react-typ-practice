import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, i) => (
          <>
            <i data-aos="zoom-in" key={i}>
              {item.icon}
            </i>
          </>
        ))}
        <p data-aos="zoom-in">All Right Resceved 2018</p>
      </footer>
    </>
  )
}

export default Footer

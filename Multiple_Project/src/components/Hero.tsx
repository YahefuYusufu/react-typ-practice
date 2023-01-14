import React from "react"
import "animate.css"

const style = {
  section: " px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left",
  container: "container static mt-20 mx-auto xl:px-32",
  box: "grid lg:grid-cols-2 flex items-center",
  section1: "md:mt-12 lg:mt-0 mb-12 lg:mb-0 ",
  section1Div: "block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 ",
  h1: "text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12 ",
  a: "inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  button:
    "inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out",
}

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.box}>
          <div
            className={`${style.section1} animate__animated  animate__fadeInLeft`}
          >
            <div className={style.section1Div}>
              <h1 className={style.h1}>
                Multiple Project <br />
                <span className="text-blue-600 animate__fadeOut">
                  these are What i Did in My Coding Journey
                </span>
              </h1>
              <a
                className={style.a}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                className={style.button}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="md:mb-12 xl:mb-24 animate__animated animate__backInRight">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              className="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

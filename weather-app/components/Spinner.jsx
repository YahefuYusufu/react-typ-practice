import Image from "next/legacy/image"
import React from "react"
import spinner from "../public/loader_spinner.gif"

export const Spinner = () => {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src={spinner}
        alt="Loading..."
      />
    </>
  )
}

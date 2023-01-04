import React from "react"

function detectType(val: number | string | number[]) {
  if (typeof val === "string") {
    return val.toLowerCase()
  } else if (typeof val === "number") {
    return val.toFixed(2)
  } else if (Array.isArray(val)) {
    return val.join(",")
  }
}

function provideId(id: number | null) {
  if (!id) {
    console.log("id is null")
    return
  }
  id.toFixed(2)
}

const Narrowing = () => {
  return <div>asd</div>
}

export default Narrowing

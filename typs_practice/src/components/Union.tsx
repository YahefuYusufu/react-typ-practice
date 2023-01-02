import React, { ReactNode } from "react"

const Union = () => {
  let score: number | string = 33

  score = 32
  score = "12"

  type User = {
    name: string
    id: number
  }

  type Admin = {
    userName: string
    id: number
  }
  let prg: User | Admin = {
    name: "prg",
    id: 12,
  }
  prg = { userName: "prgg", id: 1212 }

  //   function getDBId(id:number | string) {

  // 	console.log(`DB id is : ${id}`)
  //   }
  getDBId(3)
  getDBId("3")

  function getDBId(id: number | string) {
    if (typeof id === "string") {
      id.toLowerCase()
    }
  }

  //Array
  const data: Array<number> = [1, 2, 3]
  const data1: Array<string> = ["1", "2", "3"]
  const data2: (string | number | boolean)[] = [1, 2, "4", true]

  let seatAllotment: "aisle" | "middle" | "window"

  return (
    <>
      <div>{score}</div>
      <div>{prg.userName}</div>
      <div>{prg.id}</div>
      <div>{data}</div>
      <div>{data1}</div>
      <div>{data2}</div>
    </>
  )
}

export default Union

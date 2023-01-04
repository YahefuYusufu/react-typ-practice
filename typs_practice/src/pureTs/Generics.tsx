import React from "react"

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: number | boolean): number | boolean {
  return val
}
const identityTwo = (val: any): any => {
  return val
}
function identityThree<T>(val: T): T {
  return val
  console.log(val)
}
function identityFour<T>(val: T[]): T[] {
  return val
  console.log(val.length)
}
const identityFive = <T,>(val: T[]): T => {
  const myIndex = 3
  return val[myIndex]
}

const Generics = () => {
  return <div>Generics</div>
}

export default Generics

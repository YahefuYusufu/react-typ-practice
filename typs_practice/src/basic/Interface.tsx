import React from "react"

interface User {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string
  //   startTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

interface User {
  githubToken: string
}
interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const user: Admin = {
  dbId: 12,
  role: "admin",
  githubToken: "github",
  email: "prg@.com",
  userId: 0,
  startTrail: () => "start",
  getCoupon: (name: "prg", off: 10) => {
    return 10
  },
}

const Interface = () => {
  return (
    <>
      <div>
        <div>{user.email}</div>
        <div>{user.userId}</div>
        <div>{user.dbId}</div>
        <div>{user.startTrail()}</div>
        <div>{user.getCoupon("prg", 1)}</div>
      </div>
    </>
  )
}

export default Interface

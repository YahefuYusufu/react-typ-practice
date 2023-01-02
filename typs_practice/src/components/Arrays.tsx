import React from "react"

const superHero: string[] = []
const superHero2: Array<number> = []
const superHero3: Array<string> = []

superHero.push("supeman")
superHero2.push(3, 4)
superHero3.push("adam", "dato", "pagza")

type User = {
  name: string
  email: string
  isAvtive: boolean
}
const allUsers: User[] = []

allUsers.push(
  { name: "prg", email: "prg@g.com", isAvtive: false },
  { name: "adil", email: "adil@g.com", isAvtive: true }
)

const Arrays = () => {
  return (
    <>
      <div>
        {allUsers.map((user, i) => (
          <div key={i}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
          </div>
        ))}
      </div>
      <div>{superHero}</div>
      <div>{superHero2}</div>
      <div>{superHero3}</div>
    </>
  )
}

export default Arrays

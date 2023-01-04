import React from "react"

class User {
  name: string
  email: string
  city: string
  constructor(name: string, email: string, city: string) {
    this.name = name
    this.email = email
    this.city = city
  }
}
const prg = new User("prg", "prg@.com", "Komul ")

const Classes = () => {
  return <div>{[prg.email, prg.name, prg.city]}</div>
}

export default Classes

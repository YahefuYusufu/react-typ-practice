// const User : Array<string|number> = ['TupEnums', 1]

let User: [string, number, boolean]

User = ["TupEnums", 1, true]

let rgb: [number, number, number] = [255, 255, 255]

type User = [string, number]

const newUser: User = ["prg", 1]

newUser[1] = 2
newUser.push(3)

const TupEnums = () => {
  return <div>{newUser}</div>
}

export default TupEnums

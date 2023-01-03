const User = {
  name: "prg",
  email: "prg@gmai.com",
  isActive: true,
}
// function createUser ({ name: string; isPaid: boolean })  {}
// let newUser = { name: "asd", isPaid: false ,email:'h@gmasd.com'}
// createUser(newUser)

const createCourse = (): { name: string; price: number } => {
  return { name: "prg", price: 399 }
}

//Aliases

// type UserProps={
// 	name:string,
// 	email:string,
// 	isActive:boolean
// }

// function createUser(user:UserProps){}

// createUser({name:'',email:'',isActive:true})

//readonly & option

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myUser: User = {
  _id: "12345",
  name: "prg",
  email: "prg@gd.com",
  isActive: false,
  // credcardDetails:21
}

myUser.email = "pasd@g.com"
// myUser._id='sadasdad'

type cardNumber = {
  cardNumber: string
}

type cardData = {
  cardData: string
}
type cardDetails = cardNumber &
  cardData & {
    cvv: number
  }

const Objects = () => {
  return (
    <div>
      {User.name},{User.email},{User.isActive}
    </div>
  )
}

export default Objects

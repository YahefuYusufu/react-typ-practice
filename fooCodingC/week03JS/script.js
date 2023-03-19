// //for loop

// // for (let i = 0; i < 5; i++) {
// //   if (i % 2 !== 0) {
// //     console.log(i, "is odd")
// //   } else {
// //     console.log(i, "is even")
// //   }
// // }

// //while loop

// let i = 0

// while (i < 5) {
//   if (i % 2 !== 0) {
//     console.log(i, "is odd")
//   } else {
//     console.log(i, "is even")
//   }
//   i++
// }

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// }

// for (let key in person) {
//   console.log(key, person[key])
// }
// let newStr = ""
// for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str[i]
// }
// return console.log(newStr)

const maxOfTwo = (a, b) => {
  if (a > b) {
    return console.log(a)
  } else {
    return console.log(b)
  }
}

const maxOfThree = (a, b) => (a > b ? console.log(a) : console.log(b))
maxOfTwo(8, 3)
maxOfThree(18, 23)

const reverseStr = (str) => {
  let newStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    // newStr = newStr +str[1]
    newStr += str[i]
  }
  return console.log(newStr)
}

reverseStr("hello")

const reverseStr2 = (str) => {
  let splitStr = str.split("").reverse("").join("")

  // const reverseStr = splitStr.reverse("")

  // const joinArray = reverseStr.join("")

  return console.log(splitStr)
}
reverseStr2("string")

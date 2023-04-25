const container = document.querySelector(".container")
const unsplashURL = "Https://source.unsplash.com/random/300*300"
let rows = 5

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img")
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}

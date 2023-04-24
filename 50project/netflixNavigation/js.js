const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const nav = document.querySelectorAll(".nav")

open_btn.addEventListener("click", () => {
  nav.forEach((nav_El) => nav_El.classList.add("visible"))
})
close_btn.addEventListener("click", () => {
  nav.forEach((nav_El) => nav_El.classList.remove("visible"))
})

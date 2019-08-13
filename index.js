const sounds = document.querySelectorAll("audio")
const pads = document.querySelectorAll(".pads")
const circleEl = document.querySelector(".color-circle")
const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#6860d3", "#60b2d3"]

window.addEventListener("load", () => {

  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      sounds[index].currentTime = 0; // Starts 0s
      sounds[index].play();
      circleAnimate(index)
    })
  })

  const circleAnimate = (index) => {
    const circle = document.createElement("div")
    circleEl.appendChild(circle)
    circle.style.backgroundColor = colors[index]
    circle.style.animation = "animate 1s ease"
    circle.addEventListener("animationend", function () {
      circleEl.removeChild(this)
    })
  }
})
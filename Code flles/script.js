
//============Function to handle paralllax functinality===============

function paralllax() {

  let homeText = document.querySelector(".home-text");
  let moon = document.querySelector(".moon");
  let train = document.querySelector(".train");
  let desertMoon = document.querySelector(".desert-moon");
  let fisherman = document.querySelector(".fisherman");

  window.addEventListener("scroll", () => {

    let value = window.scrollY;

    moon.style.top = value * .9 + "px";
    homeText.style.opacity = "1";
    homeText.style.top = 80 + value * -0.2 + "%";
    train.style.left = value * 1.5 + "px";
    desertMoon.style.top = value * 0.3 + "px";
    fisherman.style.left = value * 0.6 + "px";
  })
}

paralllax();
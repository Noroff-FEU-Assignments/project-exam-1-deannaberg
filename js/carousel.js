//CAROSEL
const forwardButton = document.querySelector(".rightButton");
const backButton = document.querySelector(".leftButton");
const carousel = document.querySelector(".carousel");
let width = carousel.offsetWidth;


const moveForward = function(){
  carousel.scrollBy(width, 0);
}

const moveBack = function(){
  carousel.scrollBy(-(width), 0);
}
forwardButton.addEventListener("click", moveForward);
backButton.addEventListener("click", moveBack);
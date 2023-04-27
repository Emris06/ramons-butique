let hamburger = document.querySelector(".hamburger");
let quitBtn = document.querySelector(".quit__btn");
let extraMenu = document.querySelector(".extra__menu");
hamburger.addEventListener("click", () => {
  extraMenu.classList.add("active");
});
quitBtn.addEventListener("click", () => {
  extraMenu.classList.remove("active");
});

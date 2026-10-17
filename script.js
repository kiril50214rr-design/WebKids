const burgerMenu = document.getElementById("menu");
console.log(burgerMenu);
const menu = document.querySelector(".menu");
console.log(menu);
burgerMenu.addEventListener("click", function () {
  menu.classList.add("active");
});
const clous = document.getElementById("clous");
clous.addEventListener("click", function () {
  menu.classList.remove("active");
});

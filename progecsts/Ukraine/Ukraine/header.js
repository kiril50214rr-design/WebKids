const svg = document.getElementById("t6");
const clouse = document.getElementById("r4");
const nav = document.getElementById("uj");

svg.addEventListener("click", () => {
  svg.classList.remove("active");
  clouse.classList.add("active");
  nav.classList.add("active-nav");
  document.body.style.overflow = "hidden";
});
clouse.addEventListener("click", () => {
  clouse.classList.remove("active");
  svg.classList.add("active");
  nav.classList.remove("active-nav");
  document.body.style.overflow = "auto";
});

let currentSlide = 0;
const image = document.getElementById("image");
const title = document.getElementById("title2");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = [
  {
    title: "cat",
    image: "../img/Untitledкіт.jpg",
  },
  {
    title: "axalotl",
    image: "../img/Untitledф.jpg",
  },
  {
    title: "shoebill",
    image: "../img/увй.jpg",
  },
  {
    title: "penguin",
    image: "../img/Untitled6767.jpg",
  },
  {
    title: "bookings",
    image: "../img/imagesувц.jpg",
  },
];
function showSlide(index) {
  title.textContent = slides[index].title;
  image.src = slides[index].image;
}
showSlide(currentSlide);

next.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide > 4) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});
prev.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 4;
  }
  showSlide(currentSlide);
});

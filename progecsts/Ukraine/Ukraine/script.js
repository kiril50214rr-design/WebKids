const cities = document.querySelectorAll(".city");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");
const a1 = document.getElementById("ty");
const a2 = document.getElementById("tu");
const a3 = document.getElementById("tr");
const a4 = document.getElementById("ij");
const a5 = document.getElementById("ft");

cities.forEach((city) => {
  city.addEventListener("click", () => {
    const cityId = city.id;

    const pin = document.querySelector(`[data-id="${cityId}"]`);
    console.log(pin);
    pin.style.opacity = "1";
  });
});

let index = 1;

function show() {
  document.getElementById("slide1").style.display = "none";
  document.getElementById("slide2").style.display = "none";
  document.getElementById("slide3").style.display = "none";
  document.getElementById("slide4").style.display = "none";
  document.getElementById("slide5").style.display = "none";

  document.getElementById("slide" + index).style.display = "flex";
}

function next() {
  index = index + 1;

  if (index > 5) index = 1;

  show();
}

function prev() {
  index = index - 1;

  if (index < 1) index = 5;

  show();
}

show();

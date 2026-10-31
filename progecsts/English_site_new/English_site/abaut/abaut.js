const kidName = document.getElementById("kidName");
const kidAge = document.getElementById("kidAge");
const kidCity = document.getElementById("kidCity");
const btn = document.querySelector(".btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  console.log("test");
  const text = `My name is ${kidName.value}. I am ${kidAge.value} years old. I live in ${kidCity.value}`;
  result.textContent = text;
});

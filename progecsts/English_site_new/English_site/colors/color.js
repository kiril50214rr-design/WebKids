let selectedword = null;
const words = document.querySelectorAll(".word");
const circles = document.querySelectorAll(".circle");

words.forEach((word) => {
  word.addEventListener("click", () => {
    words.forEach((w) => {
      w.classList.remove("active");
    });
    word.classList.add("active");
    selectedword = word;
  });
});
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    if (selectedword == null) {
      return;
    }
    if (selectedword.dataset.color == circle.dataset.color) {
      selectedword.style.color = circle.dataset.color;
      selectedword.classList.remove("actives");
      selectedword = null;
    } else {
      alert("Try egain");
    }
  });
});

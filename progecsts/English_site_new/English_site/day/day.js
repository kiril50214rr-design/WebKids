const inputsDays = document.querySelectorAll(".ct");
const labelsDays = document.querySelectorAll(".cd");

labelsDays.forEach((label) => {
  const input = label.querySelector("input");
  const scramblet = label.querySelector(".scramblett");
  const correctAnswer = label.dataset.answer;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase().trim();
    console.log(value);
    console.log(correctAnswer);
    if (value === correctAnswer) {
      input.disabled = true;
      scramblet.classList.add("correct");
      scramblet.textContent = correctAnswer;
    }
  });
});

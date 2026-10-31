const inputsDays = document.querySelectorAll(".ct");
const labelsDays = document.querySelectorAll(".cb");

labelsDays.forEach((label) => {
  const input = label.querySelector("input");
  const scramblet = label.querySelector(".scramblett");
  const correctAnswer = label.dataset.answer;
  co;
  console.log("test");
  input.addEventListener("input", () => {
    console.log("test");
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

const qu = document.getElementById("question");
const an = document.getElementById("ancwers");
const cqr = document.getElementById("collor-quiz_result");
const ne = document.getElementById("nextbtn");

const quiz = [
  {
    question: "What color is the sky?",
    correct: "blue",
    options: ["red", "blue", "green", "yellow"],
  },
  {
    question: "What color is grass?",
    correct: "green",
    options: ["blue", "green", "red", "white"],
  },
  {
    question: "What color is the sun?",
    correct: "yellow",
    options: ["yellow", "purple", "brown", "pink"],
  },
  {
    question: "What color is snow?",
    correct: "white",
    options: ["white", "blue", "green", "orange"],
  },
];
let questionindex = 0;
function showquestion() {
  qu.textContent = quiz[questionindex].question;
  an.innerHTML = "";
  cqr.textContent = "";
  quiz[questionindex].options.forEach((color) => {
    const btn = document.createElement("button");
    btn.textContent = color;
    btn.className = "collor-quiz_btn";
    btn.style.background = color;
    btn.addEventListener("click", () => checkAnswers(color, btn));
    an.appendChild(btn);
  });
}

showquestion();

ne.addEventListener("click", () => {
  questionindex++;

  if (questionindex > 3) {
    return;
  }
  showquestion();
});
function checkAnswers(selected, btn) {
  const correct = quiz[questionindex].correct;
  const buttons = document.querySelectorAll(".collor-quiz_btn");
  console.log(buttons);

  if (selected === correct) {
    buttons.forEach((btn) => (btn.disabled = true));
    buttons.forEach((btn) => btn.classList.remove("color-quiz_btn--wrong"));
    btn.classList.add("color-quiz_btn--correct");
    cqr.textContent = "Correct";
  } else {
    btn.classList.add("color-quiz_btn--wrong");
    cqr.textContent = "Try again";
    btn.disabled = true;
  }
}

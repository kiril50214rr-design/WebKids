console.log(w);

const pazl = document.getElementById("pazl");
const mesage = document.getElementById("mesage");

let numbers = [2, 3, 1, 6, 4, 5, 9, 7, 8];

let forstIndex = null;
let forstWalue = null;

let secontIndex = null;
let secontWalue = null;

function criateNumbers() {
  console.log(numbers);
  numbers.forEach((element, index) => {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      console.log("test");
      clickBtn(index, button);
    });
    button.classList.add("tile");
    button.textContent = element;
    pazl.appendChild(button);
  });
}

function clickBtn(index, button) {
  if (forstIndex == null && forstWalue == null) {
    forstIndex = index;
    forstWalue = button.textContent;
    button.classList.add("active");
    return;
  } else {
    secontIndex = index;
    secontWalue = button.textContent;

    numbers[forstIndex] = secontWalue;
    numbers[secontIndex] = forstWalue;

    pazl.innerHTML = "";
    criateNumbers();
    forstIndex = null;
    forstWalue = null;
    secontIndex = null;
    secontWalue = null;
    checkWin();
  }
}

function checkWin() {
  if (numbers.join("") === "123456789") {
    mesage.textContent = "Перемога! Пазл зібрано!";
  }
}

criateNumbers();

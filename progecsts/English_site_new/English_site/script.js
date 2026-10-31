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
console.log(checkWin);

const pazl2 = document.getElementById("pazl2");
const mesage2 = document.getElementById("mesage2");
let parts = [
  "./part/9.jpg",
  "./part/8.jpg",
  "./part/7.jpg",
  "./part/6.jpg",
  "./part/5.jpg",
  "./part/4.jpg",
  "./part/3.jpg",
  "./part/2.jpg",
  "./part/1.jpg",
];
let forstIndeximg = null;
let forstWalueimg = null;

let secontIndeximg = null;
let secontWalueimg = null;
function criateParts() {
  parts.forEach((part, index) => {
    const img = document.createElement("img");
    img.src = part;
    img.addEventListener("click", () => {
      clickimg(index, img);
    });
    img.classList.add("part");

    pazl2.appendChild(img);
  });
}
criateParts();
function clickimg(index, img) {
  if (forstIndeximg == null && forstWalueimg == null) {
    forstIndeximg = index;
    forstWalueimg = parts[index];
    img.classList.add("active");
    return;
  } else {
    secontIndeximg = index;
    secontWalueimg = parts[index];
    parts[forstIndeximg] = secontWalueimg;
    parts[secontIndeximg] = forstWalueimg;

    pazl2.innerHTML = "";
    criateParts();
    forstIndeximg = null;
    forstWalueimg = null;
    secontIndeximg = null;
    secontWalueimg = null;
    checkWinimg();
  }
}
function checkWinimg() {
  if (
    parts.join("") ===
    "./part/1.jpg./part/2.jpg./part/3.jpg./part/4.jpg./part/5.jpg./part/6.jpg./part/7.jpg./part/8.jpg./part/9.jpg"
  ) {
    mesage2.textContent = "Перемога! Пазл зібрано!";
  }
}

//----------//
const riteButtons = document.querySelectorAll(".ar");
const leftButtons = document.querySelectorAll(".button-left");
let box = null;
riteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    riteButtons.forEach((btn) => {
      box = button.dataset.item;
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

leftButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("test");
    if (box == null) {
      alert("Chuse the picture first");
      return;
    }
    const answer = button.dataset.answer;
    if (box === answer) {
      riteButtons.forEach((btn) => btn.classList.remove("active"));
      box = null;
      alert("Correct");
      button.classList.add("ac");
    } else {
      alert("Try again");
    }
  });
});

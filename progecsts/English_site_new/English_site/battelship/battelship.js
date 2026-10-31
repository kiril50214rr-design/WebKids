const playerBoard = document.getElementById("playerBoard");
const enemyBoard = document.getElementById("enemyBoard");
function criateBord(board, ships, isenemyBoard) {
  for (let i = 0; i < 64; i++) {
    const cell = document.createElement("button");
    cell.className = "cell";
    if (!isenemyBoard && ships.includes(i)) {
      cell.textContent = "🚢";
    }
    cell.dataset.index = i;
    board.appendChild(cell);
  }
}

function genarateShips() {
  const ships = [];
  for (let i = 0; i < 8; i++) {
    let randomnumber = Math.floor(Math.random() * 64);
    if (!ships.includes(randomnumber)) {
      ships.push(randomnumber);
    } else {
      i--;
    }
  }
  return ships;
}
const ships = genarateShips();
criateBord(playerBoard, ships, false);
criateBord(enemyBoard);
genarateShips();

// const arr = ["ship", "ship", "ship", "ship", "ship", "ship", "ship", "ship"];

// const arrNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//   const number = Math.floor(Math.random() * 11);
//   if (!arrNumbers.includes(number)) {
//     arrNumbers.push(number);
//   } else {
//     i--;
//   }
// }

// console.log(arrNumbers);

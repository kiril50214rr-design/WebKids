const player = document.getElementById("player");
const coins = document.querySelectorAll(".coin");
const mesage = document.getElementById("message");
let x = 20;
let y = 20;
let step = 10;
let count = 0;
function isTouching(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
document.addEventListener("keydown", (event) => {
  if (event.key == "d") {
    if (x < 660) {
      x = x + step;
    }
  }
  if (event.key == "a") {
    if (x > 0) {
      x = x - step;
    }
  }
  if (event.key == "w") {
    if (y > 0) {
      y = y - step;
    }
  }
  if (event.key == "s") {
    if (y < 360) {
      y = y + step;
    }
  }

  if (x >= 0 && x <= 660 && y >= 0 && y <= 360) {
    player.style.left = x + "px";
    player.style.top = y + "px";
  }

  coins.forEach((coin) => {
    if (isTouching(player, coin) && coin.style.display !== "none") {
      coin.style.display = "none";
      count = count + 1;
    }
  });
  if (count == 5) {
    mesage.textContent = "You Win";
  }
});

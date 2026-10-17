const player = document.querySelector(".player");
const finish = document.querySelector(".finish");
const walls = document.querySelectorAll(".wall");
const mesage = document.getElementById("message");

let x = 20;
let y = 20;
let step = 10;
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
  if (x >= 0 && x <= 660 && y >= 0 && y <= 400) {
    player.style.left = x + "px";
    player.style.top = y + "px";
  }
  if (isTouching(player, finish)) {
    mesage.textContent = "You Win";
  }
  walls.forEach((wall) => {
    if (isTouching(player, wall)) {
      mesage.textContent = "Yo hit the woll";
      console.log(y);
      console.log(oldy);
      x = oldx;
      y = oldy;
      player.style.left = x + "px";
      player.style.top = y + "px";
    }
  });
});

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

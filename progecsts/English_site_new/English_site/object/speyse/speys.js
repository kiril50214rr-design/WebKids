const game = document.getElementById("game");
const spaceship = document.getElementById("spaceship");

let position = 540;

window.addEventListener("keydown", (event) => {
  if (event.key == "d" || event.key == "D") {
    position = position + 50;
  }
  if (event.key == "a" || event.key == "A") {
    position = position - 50;
  }

  const gameWidht = game.clientWidth;
  const spaceshipWidth = spaceship.clientWidth;

  if (position < 0) {
    position = 0;
  }
  if (position > gameWidht - spaceshipWidth) {
    position = gameWidht - spaceshipWidth;
  }
  spaceship.style.left = `${position}px`;
  if (event.code == "Space") {
    shoot();
  }
});

function shoot() {
  const gameWidht = game.clientWidth;
  const spaceshipWidth = spaceship.clientWidth;
  const spaceshipHight = spaceship.clientHeight;

  const bullt = document.createElement("div");
  bullt.classList.add("bullt");
  bullt.style.left = `${position + spaceshipWidth / 2}px`;
  bullt.style.bottom = `${spaceshipHight}px`;
  game.appendChild(bullt);
  let bottombullt = spaceshipHight;
  const bulltinterval = setInterval(() => {
    bottombullt = bottombullt + 10;
    const asteroids = document.querySelectorAll(".asteroid");
    asteroids.forEach((asteroid) => {
      if (isCollision(bullt, asteroid)) {
        asteroid.remove();
        bullt.remove();
        clearInterval(bulltinterval);
      }
    });
    bullt.style.bottom = `${bottombullt}px`;
    if (bottombullt > game.clientHeight) {
      clearInterval(bulltinterval);
      bullt.remove();
    }
  }, 10);
}

for (let i = 0; i < 5; i++) {
  const asteroid = document.createElement("img");
  asteroid.classList.add("asteroid");
  asteroid.src = "./img/asteroid.png";
  game.appendChild(asteroid);

  const left = Math.floor(
    Math.random() * (game.clientWidth - asteroid.clientWidth),
  );
  asteroid.style.left = `${left}px`;
  const top = Math.floor(
    Math.random() * (game.clientHeight / 2 - asteroid.clientWidth),
  );
  asteroid.style.top = `${top}px`;
}

function isCollision(bullt, asteroid) {
  const first = bullt.getBoundingClientRect();
  const second = asteroid.getBoundingClientRect();
  return (
    first.right > second.left &&
    first.left < second.right &&
    first.bottom > second.top &&
    first.top < second.bottom
  );
}

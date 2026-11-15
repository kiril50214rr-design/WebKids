let cart = ["меч", "щит"];
function addItem(item) {
  if (cart.includes(item)) {
    alert("Такий предмет уже є!");
  } else {
    cart.unshift(item);
    console.log(cart);
  }
}
addItem("item");
addItem("item");
let players = ["Оля", "Максим", "Артем"];
function nextPlayer() {
  if (players.length == 1) {
    console.log("Гравців більше немає");
  } else {
    players.shift();
    console.log(players);
  }
}
nextPlayer();
nextPlayer();
nextPlayer();
let arr = [];
function takeItem(item) {
  if (arr.length >= 4) {
    console.log("Рюкзак повний!");
  } else {
    arr.unshift(item);
    console.log(arr);
  }
}
takeItem("item");
takeItem("item");
takeItem("item");
takeItem("item");
takeItem("item");
let items = ["меч", "щит", "лук", "зілля"];
function swapItems(first, second) {
  let index1 = items.indexOf(first);
  console.log(index1);
  let index2 = items.indexOf(second);
  console.log(index2);
  let box = items[index1];
  items[index1] = items[index2];
  items[index2] = box;
  console.log(items);
}
swapItems(items[0], items[2]);

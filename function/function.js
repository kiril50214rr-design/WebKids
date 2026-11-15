function startLesson() {
  console.log("Привіт, командо");
}
startLesson();
function sayHello() {
  console.log(" Привіт, програмісте!");
}
sayHello();

function greetPlayer(name) {
  console.log(name + " привіт");
}
greetPlayer("Кирило");
function feedPet(pet, food) {
  console.log(pet + " отримуе їжу: " + food);
}
feedPet("Кіт", "риба");

function double(number) {
  return number * 2;
}

let result = double(2);
alert(result);

function getTripDistance(speed, hours) {
  return speed * hours;
}
let result2 = getTripDistance(100, 70);
alert(result2);

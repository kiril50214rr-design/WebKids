const pets = [
  {
    name: "Барсик",
    animal: "Кіт",
    age: 3,
    color: "Сірий",
    favoriteFood: "Риба",
  },

  {
    name: "Рекс",
    animal: "Собака",
    breed: "Лабрадор",
    age: 5,
    favoriteToy: "М’ячик",
  },

  {
    name: "Кеша",
    animal: "Папуга",
    color: "Зелений",
    canTalk: "Так",
  },

  {
    name: "Сніжок",
    animal: "Кролик",
    age: 2,
    favoriteFood: "Морква",
    character: "Спокійний",
  },
];
const wrapper = document.querySelector(".wrapper");
pets.forEach((pet) => {
  const petcard = document.createElement("div");
  petcard.classList.add("pet-card");
  for (key in pet) {
    // console.log(key);
    // console.log(pet[key]);
    const petinfo = document.createElement("p");
    petinfo.textContent = `${key}: ${pet[key]}`;
    petcard.appendChild(petinfo);
  }
  wrapper.appendChild(petcard);
});
const toys = [
  {
    name: "М’яч",
    price: 120,
  },
  {
    name: "Лялька",
    price: 350,
  },
  {
    name: "Конструктор",
    price: 500,
  },
  {
    name: "Машинка",
    price: 280,
  },
];
let box = toys[0].price;
toys.forEach((toy) => {
  if (box < toy.price) {
    box = toy.price;
  }
});
console.log(box);

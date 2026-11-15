const products = [
  {
    name: "Смартфон",
    brand: "Samsung",
    color: "Чорний",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop",
  },
  {
    name: "Ноутбук",
    brand: "Apple",
    color: "Сріблястий",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop",
  },
  {
    name: "Навушники",
    brand: "Sony",
    color: "Чорний",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop",
  },
  {
    name: "Планшет",
    brand: "Samsung",
    color: "Сірий",
    price: 15000,
    image: "https://placehold.co/400x300/e0e7ff/333333?text=Tablet",
  },
  {
    name: "Смартгодинник",
    brand: "Apple",
    color: "Чорний",
    price: 11000,
    image: "https://placehold.co/400x300/dbeafe/333333?text=Smartwatch",
  },
  {
    name: "Ігрова миша",
    brand: "Logitech",
    color: "Білий",
    price: 1800,
    image: "https://placehold.co/400x300/fce7f3/333333?text=Mouse",
  },
  {
    name: "Клавіатура",
    brand: "HyperX",
    color: "Чорний",
    price: 3200,
    image: "https://placehold.co/400x300/ede9fe/333333?text=Keyboard",
  },
  {
    name: "Монітор",
    brand: "LG",
    color: "Чорний",
    price: 8500,
    image: "https://placehold.co/400x300/d1fae5/333333?text=Monitor",
  },
  {
    name: "Портативна колонка",
    brand: "JBL",
    color: "Синій",
    price: 2500,
    image: "https://placehold.co/400x300/cffafe/333333?text=Speaker",
  },
  {
    name: "Ігрова консоль",
    brand: "Sony",
    color: "Білий",
    price: 24000,
    image: "https://placehold.co/400x300/ffedd5/333333?text=Game+Console",
  },
  {
    name: "Фотоапарат",
    brand: "Canon",
    color: "Чорний",
    price: 28000,
    image: "https://placehold.co/400x300/fef3c7/333333?text=Camera",
  },
  {
    name: "Павербанк",
    brand: "Xiaomi",
    color: "Сріблястий",
    price: 1200,
    image: "https://placehold.co/400x300/e2e8f0/333333?text=Powerbank",
  },
  {
    name: "Вебкамера",
    brand: "Logitech",
    color: "Чорний",
    price: 2100,
    image: "https://placehold.co/400x300/dcfce7/333333?text=Webcam",
  },
];
const wrapper = document.querySelector(".wrapper");
products.forEach((product) => {
  wrapper.innerHTML += `
    <div class="card">
        <img src = "${product.image}" alt = "${product.name}">
        <h2>${product.name}</h2>
        <p>Фірма - ${product.brand}</p>
        <p>Колір - ${product.color}</p>
        <p>Коштує - ${product.price} грн</p>
        <button>Купити</button>
    </div>`;
});

const card = document.querySelector(".card");

const product = [
  {
    title: "599,89₽",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./aaa.png.png",
    image1: "./rating.png",
  },
  {
    title: "44,50₽",
    brand: "Колбаса сырокопченая МЯСНАЯ ",
    price: "ИСТОРИЯ Колбаса Тоскан...",
    ishlab: "В корзину",

    image: "./calbasa laykk.png",
    image1: "./4ta yulduz.svg",
  },
  {
    title: "159,99₽",

    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./uchinchi qator.png",
    image1: "./rating.png",
  },
  {
    title: "49,39₽",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./maloka.png",
    image1: "./rating.png",
  },
  {
    title: "77,99₽",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./calbasa bulak.jpg",
    image1: "./rating.png",
  },
  {
    title: "159,99₽",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./image (3).png",
    image1: "./rating.png",
  },
  {
    title: "599,99₽",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./aaa.png.png",
    image1: "./rating.png",
  },
  {
    title: "49,39₽",
    brand: "Комбайн КЗС-1218 ",
    price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
    ishlab: "В корзину",

    image: "./maloka.png",
    image1: "./rating.png",
  },
];

function displayProducts(data) {
  let str = "";
  data.forEach((product) => {
    str += `
    <div class="car1">
    <img src="${product.image}" />
    <h3>${product.title}</h3>
    <h4>${product.brand}</h4>
    <p>${product.price}</p>
    <img src="${product.image1}" />
    <h1>${product.ishlab}</h1>
    </div>

    `;
  });
  card.innerHTML = str;
}
displayProducts(product);

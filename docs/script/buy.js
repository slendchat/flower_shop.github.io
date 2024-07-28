const urlParams = new URLSearchParams(window.location.search);
const param1Value = urlParams.get('id');

const bouquets = [
  {
    ID: 1,
    name: "Сладострастная любовь",
    cost: "200MDL",
    imgsrc: "img/bouquet1.jpg"
  },
  {
    ID: 2,
    name: "Страсть по французски",
    cost: "250MDL",
    imgsrc: "img/bouquet2.jpg"
  },
  {
    ID: 3,
    name: "Нежный поцелуй",
    cost: "150MDL",
    imgsrc: "img/bouquet3.jpg"
  },
]


const imgEl = document.querySelector(".image");
const detailsEl = document.querySelector(".name");
const priceEl = document.querySelector(".price");
const productdetailsEl = document.querySelector(".product-details");

const reqbouquet = bouquets.find(obj => obj.ID == param1Value);

imgEl.innerHTML = `<img src="${reqbouquet.imgsrc}" alt="Bouquet Image">`;
detailsEl.innerHTML = `<h1>${reqbouquet.name}</h1>`;
priceEl.innerText = reqbouquet.cost;



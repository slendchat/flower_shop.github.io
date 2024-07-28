let bouquet = {};
let packaging = '';

function addToBouquet(flower) {
  const qty = document.getElementById(flower + '-qty').value;
  if (qty && qty > 0) {
    bouquet[flower] = parseInt(qty, 10);
    updateBouquetSummary();
  } else {
    alert('Укажите верное количество');
  }
}

function choosePackaging(packType) {
  packaging = packType;
  document.getElementById('chosen-packaging').textContent = packaging.charAt(0).toUpperCase() + packaging.slice(1) + ' Wrap';
}

function updateBouquetSummary() {
  const bouquetList = document.getElementById('bouquet-list');
  bouquetList.innerHTML = '';
  for (const [flower, qty] of Object.entries(bouquet)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${flower.charAt(0).toUpperCase() + flower.slice(1)}: ${qty}`;
    bouquetList.appendChild(listItem);
  }
}

function reviewOrder() {
  if (Object.keys(bouquet).length === 0) {
    alert('Пожалуйста добавте цветы в свой букет');
    return;
  }
  if (!packaging) {
    alert('Пожалуйства выберите упаковку');
    return;
  }
  alert('Ваш букет готов к отправке!');
}
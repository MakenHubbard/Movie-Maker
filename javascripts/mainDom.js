// printToDom categories
const data = require('./data');

const outputSpot = document.getElementById('main-ticket');
const receiptSpot = document.getElementById('receipt-ticket');
// const elementOutputSpot = document.getElementByClassName('elmos')

const catDomString = () => {
  const cats = data.getCategories();
  const ells = data.getElements();

  let strung = '';
  cats.forEach((category) => {
    strung += `<div class="container-fluid">`;
    strung += `<h2>${category.categoryName}</h2>`;
    strung += `<div id='${category.id}'>`;
    ells.forEach((element) => {
      if (element.categoryId === category.id) {
        strung += `<div class="col-md-4">`;
        strung += `<input class="${category.categoryName}--${element.cost}" type="checkbox" id=${element.id}>`;
        strung += `<label for=${element.id}>${element.name}</label>`;
        strung += `</div>`;
      };
    });
    strung += `</div>`;
    strung += `</div>`;

  });
  return strung;
};

const receiptDom = (selectionsArray) => {
  const theSelected = data.getSelections();
  let strang = '';
  theSelected.forEach((selected) => {
    strang += `<div class="returnSelected">`;
    strang += `<p>${selected.name}</p>`;
    strang += `<p>${selected.cost}</p>`;
    strang += `</div>`;
  });
  return strang;
};

const printCatsToDom = () => {
  outputSpot.innerHTML = catDomString();
};

const printReceiptToDom = (selectionsArray, element) => {
  receiptSpot.innerHTML = receiptDom(selectionsArray);
};

module.exports = {
  printCatsToDom,
  receiptDom,
  printReceiptToDom,
};

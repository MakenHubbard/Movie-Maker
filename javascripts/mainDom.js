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
        strung += `<input class="${category.categoryName}--${element.cost}" type="checkbox" id=${element.id} box>`;
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
    strang += `<p>Select more categories to make this movie!`;
    strang += `</div>`;
  });
  return strang;
};

const receiptDomTwo = (selectionsArray) => {
  const theSelected = data.getSelections();
  let strangz = '';
  theSelected.forEach((selected) => {
    strangz += `<div class="returnSelected">`;
    strangz += `<p>${selected.name}</p>`;
    strangz += `<p>${selected.cost}</p>`;
    strangz += `<p>You can not not make this Movie`;
    strangz += `</div>`;
  });
  return strangz;
};

const printCatsToDom = () => {
  outputSpot.innerHTML = catDomString();
};

const printReceiptToDom = (selectionsArray, element) => {
  receiptSpot.innerHTML = receiptDom(selectionsArray);
};

const printMovieStatus = (selectionsArray, element) => {
  receiptSpot.innerHTML = receiptDomTwo(selectionsArray);
};

module.exports = {
  printCatsToDom,
  receiptDom,
  printReceiptToDom,
  receiptDomTwo,
  printMovieStatus,
};

// printToDom categories

// const events = require('./events');
const data = require('./data');
const outputSpot = document.getElementById('main-ticket');
const events = require('./events');
// const receiptSpot = document.getElementById('receiptTicket');
// const elementOutputSpot = document.getElementByClassName('elmos')

const catDomString = () => {
  const cats = data.getCategories();
  const ells = data.getElements();

  let strung = '';
  cats.forEach((category) => {
    strung += `<div class="container-fluid">`;
    strung += `<h2>${category.categoryName}</h2>`;

    ells.forEach((element) => {
      if (element.categoryId === category.id) {
        strung += `<div class="col-md-4">`;
        strung += `<input class="${category.categoryName}--${element.cost}" type="checkbox" id=${element.id}>`;
        strung += `<label for=${element.id}>${element.name}</label>`;
        strung += `</div>`;
      };
    });
    strung += `</div>`;

  });
  return strung;
};

// const receiptDom = () => {
//   const ells = data.getElements();
//   let strang = '';
//   if (checkbox.checked === element.id) {
//     strang += `<div class="returnSelected">`;
//     strang += `<p>${element.name}${element.cost}</p>`;
//     strang += `</div>`
//   };
//   return strang;
// };

const printCatsToDom = () => {
  outputSpot.innerHTML = catDomString();
};

// const printReceiptToDom = () => {
//   receiptSpot.innerHTML = receiptDom();
// };

module.exports = printCatsToDom;

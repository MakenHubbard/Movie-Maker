// printToDom categories
console.log('hi');
// const events = require('./events');
const data = require('./data');
const outputSpot = document.getElementById('main-ticket');
// const elementOutputSpot = document.getElementByClassName('elmos')

const catDomString = () => {
  const cats = data.getCategories();
  const ells = data.getElements();
  console.log('elements',ells);
  console.log('cats',cats);

  let strung = '';
  cats.forEach((category) => {
    console.log(category);
    strung += `<div class="category">`;
    strung += `<div class="categoryTitle">`;
    strung += `<h2>${category.categoryName}</h2>`;
    strung += `</div>`;

    ells.forEach((element) => {
      if (element.categoryId === category.id) {
        strung += `<div class="category_elements">`;
        strung += `<input type="checkbox" id=${element.id}>`;
        strung += `<label for=${element.id}>${element.name}</label>`;
        strung += `</div>`;
      };
    });
    strung += `</div>`;

  });
  console.log('is this empty',strung);
  return strung;
};

const printCatsToDom = () => {
  outputSpot.innerHTML = catDomString();
};

module.exports = printCatsToDom;

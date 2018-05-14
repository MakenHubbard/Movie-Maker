// parse data-initializer
const loadElements = require('./movieElements');
const loadCategories = require('./movieCategories');
const data = require('./data');
const printToDom = require('./mainDom');
const events = require('./events');

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  data.setElements(elementsData);
  loadCategories(whenCategoriesLoad, wong);
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  printToDom.printCatsToDom();
};

const wong = function () {
  console.error('something went wong');
};

const initializer = () => {
  loadElements(whenElementsLoad, wong);
  events.budgEvent();
};

module.exports = {
  initializer,
};

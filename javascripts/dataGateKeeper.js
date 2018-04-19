// parse data-initializer
const loadElements = require('./movieElements');
const loadCategories = require('./movieCategories');
const data = require('./data');

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  data.setElements(elementsData);
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
};

const wong = function () {
  console.error('something went wong');
};

const initializer = () => {
  loadElements(whenElementsLoad, wong);
  loadCategories(whenCategoriesLoad, wong);
};

module.exports = {
  initializer,
};

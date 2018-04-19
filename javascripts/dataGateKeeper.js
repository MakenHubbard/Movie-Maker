// parse data-initializer
const loadElements = require('./movieElements.js');
const loadCategories = require('./movieCategories');

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
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

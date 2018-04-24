// xhr categories.json
const loadCategories = (loadCategoriesFunction, errorCategoriesFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadCategoriesFunction);
  myRequest.addEventListener('error', errorCategoriesFunction);
  myRequest.open('GET', '../db/categories.json');
  myRequest.send();
};

module.exports = loadCategories;

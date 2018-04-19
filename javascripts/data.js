// manipulate data , call xhrs
let categoriesArray = [];
let elementsArray = [];

const setCategories = (goryArray) => {
  categoriesArray = goryArray;
};

const getCategories = () => {
  return categoriesArray;
};

const setElements = (mentsArray) => {
  elementsArray = mentsArray;
};

const getElements = () => {
  return elementsArray;
};

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
};

// manipulate data , call xhrs
let categoriesArray = [];
let elementsArray = [];
const selectionsArray = [];

const setCategories = (goryArray) => {
  console.log(goryArray);
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

const getSelections = () => {
  return selectionsArray;
};

const setSelections = (element) => {
  selectionsArray.push(element);
};

const removeSelection = (element) => {
  console.log(element);
  const index = selectionsArray.indexOf(element);
  selectionsArray.splice(index,1);
  console.log(selectionsArray);
  console.log(index);
};

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
  setSelections,
  getSelections,
  removeSelection,
};

// add event listeners
const data = require('./data');
const doms = require('./mainDom.js');

const userInput = document.getElementById('exampleInputAmount');
const budgButt = document.getElementById('watchIt');

const processEvent = (e) => {
  const info = e.target.className.split('--');
  const cost = info[1];
  const cat = info[0];
  const elementName = e.target.parentNode.innerText;
  const element = {
    'name': elementName,
    'cost': cost,
    'category': cat,
  };
  if (e.target.checked) {
    data.setSelections(element);
    doms.receiptDom(element);
  } else {
    data.removeSelection(element);
  };
  doms.printReceiptToDom(data.getSelections());
};

const budgEvent = () => {
  budgButt.addEventListener('click', setBudgButt);
};

const setBudgButt = (e) => {
  e.preventDefault();
  const budget = userInput.value;
  console.log(budget);
};

// document.getElementByClassName('Btn').addEventListener('click',)
document.getElementById('main-ticket').addEventListener('click', processEvent);

module.exports = {
  processEvent,
  budgEvent,
};

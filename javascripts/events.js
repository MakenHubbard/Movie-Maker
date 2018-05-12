// add event listeners
const data = require('./data');
const doms = require('./mainDom.js');
const progress = require('./progressBar');

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
    // progress(element);
  } else {
    data.removeSelection(element);
  };
  doms.printReceiptToDom(data.getSelections());
  const costData = data.getSelections().reduce((totalCost,element) => {
    return totalCost += parseInt(element.cost);
  },0);
  if (costData > parseInt(userInput.value)) {
    overBudget();
  }
  console.log(data.getSelections());
  progress();
};

const overBudget = () => {
  document.getElementById('receipt-ticket').textContent = 'Can not make this movie';
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

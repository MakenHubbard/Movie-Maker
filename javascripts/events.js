// add event listeners
const data = require('./data');
const doms = require('./mainDom.js');
const progress = require('./progressBar');

const userInput = document.getElementById('exampleInputAmount');
const budgButt = document.getElementById('watchIt');

const processEvent = (e) => {
  console.log(e);
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
  } else if (e.target.checked === false && e.target.tagName === 'INPUT') {
    data.removeSelection(element);
  };
  doms.printReceiptToDom(data.getSelections());
  const costData = data.getSelections().reduce((totalCost, element) => {
    return totalCost += parseInt(element.cost);
  }, 0);

  if (costData > parseInt(userInput.value)) {
    overBudget();
  };
  console.log(data.getSelections());
  progress();
};

const overBudget = () => {
  document.getElementById('receipt-ticket').textContent = 'CAN NOT MAKE THIS MOVIE BECAUSE YOU RAN OUT OF MONEY FOOL !!!';
};

const budgEvent = () => {
  budgButt.addEventListener('click', setBudgButt());
};

const setBudgButt = (e) => {
  e.preventDefault();
  userInput.value;
  // console.log(budget);
};

document.getElementById('main-ticket').addEventListener('click', processEvent);

module.exports = {
  processEvent,
  budgEvent,
};

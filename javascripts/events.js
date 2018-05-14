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
  const costData = data.getSelections().reduce((totalCost, element) => {
    return totalCost += parseInt(element.cost);
  }, 0);
  for (let i = 0; i < data.getSelections().length; i++) {
    if (data.getSelections().length < 4) {
      doms.receiptDom(element);
      console.log(doms.receiptDomTwo(element));
    } else {
      doms.printMovieStatus(doms.receiptDomTwo(element));
    };
  };
  if (costData > parseInt(userInput.value)) {
    overBudget();
  };
  console.log(data.getSelections());
  progress();
  // needAllCats();
};

const overBudget = () => {
  document.getElementById('receipt-ticket').textContent = 'Can not make this movie because you ran out of money fool!!!';
};

// const needAllCats = (progress) => {
//   if (progress.counter !== 4) {
//     console.log();
//     document.getElementById('receipt-ticket').textContent = 'Can not make this movie';
//   } else {
//     document.getElementById('receipt-ticket').textContent = 'You can not not make this movie';
//   }
// };

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

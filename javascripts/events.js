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
    // progress(element);
  } else if (e.target.checked === false && e.target.tagName === 'INPUT') {
    data.removeSelection(element);
  };
  doms.printReceiptToDom(data.getSelections());
  const costData = data.getSelections().reduce((totalCost, element) => {
    return totalCost += parseInt(element.cost);
  }, 0);
  const selections = data.getSelections();
  console.log('wooohoo!!', selections.includes('Actors and Actresses'));
  // for (let i = 0; i < selections.length; i++) {
  //   if (selections.category !== 'Actors and Actresses') {
  //     console.log('heres johnny',selections.category);
  //     doms.receiptDom(element);
  //   } else {
  //     doms.printMovieStatus(doms.receiptDomTwo(element));

  //   };
  // };
  if (costData > parseInt(userInput.value)) {
    overBudget();
  };
  console.log(data.getSelections());
  progress();
};

const overBudget = () => {
  document.getElementById('receipt-ticket').textContent = 'Can not make this movie because you ran out of money fool!!!';
};

const budgEvent = () => {
  budgButt.addEventListener('click', setBudgButt);
};

const setBudgButt = (e) => {
  e.preventDefault();
  const budget = userInput.value;
  console.log(budget);
};

document.getElementById('main-ticket').addEventListener('click', processEvent);

module.exports = {
  processEvent,
  budgEvent,
};

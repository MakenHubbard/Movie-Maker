// add event listeners
// const data = require('./data');
const doms = require('./mainDom.js');

// const receiptSpot = document.getElementById('receiptTicket');

const processEvent = (e) => {
  console.log(e);
  if (e.target.type === 'checkbox') {
    const info = e.target.className.split('--');
    const cost = info[1];
    const cat = info[0];
    const elementName = e.target.parentNode.innerText;
    const element = {
      'name': elementName,
      'cost': cost,
      'category': cat,
    };
    console.log('hjeheh');
    doms.receiptDom(element);
  };
  console.log('jar jar');
  doms.printReceiptToDom();
};

document.getElementById('main-ticket').addEventListener('click', processEvent);
// const budgetButton = () => {
//   receiptSpot.addEventListener('click', () => {

//   })
// };

// checkbox.onChange = function () {
//   if (checkbox.checked) {
//     console.log(true);
//   }
// }

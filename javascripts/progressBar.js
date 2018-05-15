// get progress bar to update

const doms = require('./mainDom');

const checkSelected = () => {
  const categoryIds = ['who', 'what', 'where', 'how',];
  let counter = 0;
  categoryIds.forEach((category) => {
    const isChecked = [].slice.call(document.getElementById(category)
      .childNodes).some((element) => { return element.children[0].checked === true; });
    if (isChecked) {
      counter++;
    }
  });
  document.getElementsByClassName('progress-bar')[0].style = `width: ${counter * 25}%`;
  if (document.getElementsByClassName('progress-bar')[0].style === `width: 100%`) {
    doms.receiptDom();
  } else if (counter === 4) {
    doms.printMovieStatus(doms.receiptDomTwo());
  };
};

module.exports = checkSelected;

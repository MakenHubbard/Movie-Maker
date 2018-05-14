// get progress bar to update
// const data = require('./data');

// [].slice.call(document.getElementById('who').childNodes).some((element) => {return element.children[0].checked === true});

const checkSelected = () => {
  const categoryIds = ['who', 'what', 'where', 'how',];
  let counter = 0;
  categoryIds.forEach((category) => {
    const isChecked = [].slice.call(document.getElementById(category)
      .childNodes).some((element) => { return element.children[0].checked === true; });
    if (isChecked) {
      counter++;
    };
  });
  document.getElementsByClassName('progress-bar')[0].style = `width: ${counter * 25}%`;
};

module.exports = checkSelected;

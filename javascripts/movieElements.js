// xhr movieElements.json
const loadElements = (loadElementsData, errorElementFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadElementsData);
  myRequest.addEventListener('error', errorElementFunction);
  myRequest.open('GET', '../db/movieElements.json');
  myRequest.send();
};

module.exports = loadElements;

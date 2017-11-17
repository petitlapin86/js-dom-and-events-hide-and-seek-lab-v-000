function getFirstSelector(selector) {
  return document.querySelector(selector)
} // returns the first element that matches the selector

function nestedTarget(div) {
  return document.querySelector('#nested', '.target')
}

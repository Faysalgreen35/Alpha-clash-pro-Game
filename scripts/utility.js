function elementHiddenbyID(elementID) {
  const elements = document.getElementById(elementID);
  elements.classList.add('hidden');
}
function showElementbyID(elementID) {
  const elements = document.getElementById(elementID);
  elements.classList.remove('hidden');
}

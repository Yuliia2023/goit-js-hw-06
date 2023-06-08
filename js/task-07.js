const inputChange = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
function changeFontSize() {
  span.style.fontSize = `${inputChange.value}px`;
}
inputChange.addEventListener("change", changeFontSize);

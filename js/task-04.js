let counterValue = 0;
const spanCounter = document.querySelector("#value");
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
console.log(btnMinus.dataset.action);
function handleDecrementButtonClick() {
  spanCounter.textContent = counterValue -= 1;
}
function handleIncrementButtonClick() {
  spanCounter.textContent = counterValue += 1;
}
btnMinus.addEventListener("click", handleDecrementButtonClick);
btnPlus.addEventListener("click", handleIncrementButtonClick);

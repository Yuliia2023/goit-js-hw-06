const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const array = [];
const itemEl = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = el;
  array.push(liEl);
});
console.log(...array);
listEl.append(...array);

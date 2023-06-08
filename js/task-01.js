const itemEl = document.querySelectorAll(".item");

// const liElem = document.querySelectorAll(".item");
const quantityLi = itemEl.length;
console.log(`Number of categories: ${quantityLi}`);
itemEl.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.children[1].children.length}`
  )
);

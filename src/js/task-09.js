const changeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const typeOfColor = document.querySelector(".color");
function changeColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  typeOfColor.textContent = `- ${body.style.backgroundColor}`;
}
changeBtn.addEventListener("click", changeColor);

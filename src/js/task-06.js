const textInput = document.querySelector("#validation-input");
function changeColorInputBlur(event) {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
  }
}
textInput.addEventListener("blur", changeColorInputBlur);

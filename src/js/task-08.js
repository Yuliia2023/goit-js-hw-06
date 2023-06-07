const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", checkFormsSubmit);
function checkFormsSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((data, nameInput) => console.log(`${data} - ${nameInput}`));
  event.currentTarget.reset();
}

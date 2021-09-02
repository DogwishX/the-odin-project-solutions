let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let confirmationInput = document.querySelector(".password-confirmation");

emailInput.addEventListener("input", handleEmailInput);
passwordInput.addEventListener(
  "input",
  (event) => (passwordInput = document.querySelector(".password"))
);
confirmationInput.addEventListener("input", handleConfirmationInput);

function handleEmailInput() {
  emailInput.validity.typeMismatch
    ? emailInput.setCustomValidity("Please type in a valid email address!")
    : emailInput.setCustomValidity("");
}

function handleConfirmationInput({ target }) {
  target.value == passwordInput.value
    ? confirmationInput.setCustomValidity("")
    : confirmationInput.setCustomValidity("This field must match the password");
}

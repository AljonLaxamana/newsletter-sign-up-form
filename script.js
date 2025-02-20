const formEl = document.querySelector("#sign-up-form");
const emailInputEl = document.querySelector("#email");
const emailErrorMessageEl = document.querySelector(".email-error-message");
const alertSuccessEl = document.querySelector(".alert-success");
const emailTextEl = document.querySelector(".email-text");
const btnDismissEl = document.querySelector(".alert-success-btn");

function validateEmail(email) {
  // Regular expressiong for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

formEl.addEventListener("submit", (e) => {
  // Prevent default bahavior
  e.preventDefault();

  emailInputEl.classList.remove("error-input");
  emailErrorMessageEl.classList.remove("show");

  if (emailInputEl.value === "") {
    emailInputEl.classList.add("error-input");
    emailErrorMessageEl.classList.add("show");
    emailErrorMessageEl.textContent = "No email entered";
  } else if (!validateEmail(emailInputEl.value)) {
    emailInputEl.classList.add("error-input");
    emailErrorMessageEl.classList.add("show");
    emailErrorMessageEl.textContent = "Valid email required";
  } else {
    alertSuccessEl.classList.remove("hide");
    alertSuccessEl.classList.add("show");
    emailTextEl.textContent = emailInputEl.value;
    formEl.classList.add("hide");
  }
});

btnDismissEl.addEventListener("click", () => {
  alertSuccessEl.classList.remove("show");
  alertSuccessEl.classList.add("hide");
  emailInputEl.value = "";
  formEl.classList.remove("hide");
});

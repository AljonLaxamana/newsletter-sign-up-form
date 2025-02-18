const formEl = document.querySelector("#sign-up-form");
const emailInputEl = document.querySelector("#email");
const emailErrorMessageEl = document.querySelector(".email-error-message");

function validateEmail(email) {
  // Regular expressiong for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

formEl.addEventListener("submit", (e) => {
  // Prevent default bahavior
  e.preventDefault();

  if (emailInputEl.value == "") {
    emailInputEl.classList.add("error-input");
    emailErrorMessageEl.classList.toggle("show");
    emailErrorMessageEl.textContent = "No email entered";
  } else if (!validateEmail(emailInputEl.value)) {
    emailInputEl.classList.add("error-input");
    emailErrorMessageEl.classList.toggle("show");
    emailErrorMessageEl.textContent = "Valid email required";
  } else {
    emailInputEl.classList.remove("error-input");
    emailErrorMessageEl.classList.remove("show");
    console.log("Success");
  }
});

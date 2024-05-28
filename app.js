const form = document.querySelector("form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitButton = document.querySelector("form button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const firtNameError = document.querySelector(".first_name");
  const lastNameError = document.querySelector(".last_name");
  const emailError = document.querySelector(".email");
  const passwordError = document.querySelector(".password");

  let isValid = true;

  // Validate first name
  if (firstNameValue === "") {
    firstName.style.outline = "1px solid red";
    firtNameError.style.display = "block";
    document.querySelector(".error.first_name").textContent =
      "First Name cannot be empty";
    isValid = false;
  } else {
    firstName.style.outline = "1px solid var(--grayishBlue)";
    firtNameError.style.display = "none";
    document.querySelector(".error.first_name").textContent = "";
  }

  // Validate last name
  if (lastNameValue === "") {
    lastName.style.outline = "1px solid red";
    lastNameError.style.display = "block";
    document.querySelector(".error.last_name").textContent =
      "Last Name cannot be empty";
    isValid = false;
  } else {
    lastName.style.outline = "1px solid var(--grayishBlue)";
    lastNameError.style.display = "none";
    document.querySelector(".error.last_name").textContent = "";
  }

  // Validate email
  if (emailValue === "") {
    email.style.outline = "1px solid red";
    emailError.style.display = "block";
    document.querySelector(".error.email").textContent =
      "Email cannot be empty";
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    email.style.outline = "1px solid red";
    emailError.style.display = "block";
    document.querySelector(".error.email").textContent =
      "Looks like this is not an email";
    isValid = false;
  } else {
    email.style.outline = "1px solid var(--grayishBlue)";
    emailError.style.display = "none";
    document.querySelector(".error.email").textContent = "";
  }

  // Validate password
  if (passwordValue === "") {
    password.style.outline = "1px solid red";
    passwordError.style.display = "block";
    document.querySelector(".error.password").textContent =
      "Password cannot be empty";
    isValid = false;
  } else {
    password.style.outline = "1px solid var(--grayishBlue)";
    passwordError.style.display = "none";
    document.querySelector(".error.password").textContent = "";
  }

  if (isValid) {
    // Change button text to "Submitted successfully"
    submitButton.textContent = "Submitted successfully";

    // Reset form after 5 seconds
    setTimeout(() => {
      form.reset();
      submitButton.textContent = "Claim your free trial";
    }, 500);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

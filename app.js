document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const firstName = document.querySelector("#first_name");
  const lastName = document.querySelector("#last_name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const submitButton = document.querySelector("form button");
  const togglePassword = document.getElementById("togglePassword");
  const eyeIcon = document.getElementById("eyeIcon");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });

  togglePassword.addEventListener("click", () => {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    eyeIcon.src =
      type === "password"
        ? "images/eye-outline (1).svg"
        : "images/eye-off-outline.svg";
    eyeIcon.alt = type === "password" ? "Show Password" : "Hide Password";
  });

  function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const firstNameError = document.querySelector(".error.first_name");
    const lastNameError = document.querySelector(".error.last_name");
    const emailError = document.querySelector(".error.email");
    const passwordError = document.querySelector(".error.password");

    const firstNameIcon = document.querySelector(".error__icon.first_name");
    const lastNameIcon = document.querySelector(".error__icon.last_name");
    const emailIcon = document.querySelector(".error__icon.email");
    const passwordIcon = document.querySelector(".error__icon.password");

    let isValid = true;

    // Validate first name
    if (firstNameValue === "") {
      firstName.style.outline = "1px solid var(--red)";
      firstNameError.style.display = "block";
      firstNameError.textContent = "First Name cannot be empty";
      firstNameIcon.style.display = "block";
      isValid = false;
    } else {
      firstName.style.outline = "1px solid var(--grayishBlue)";
      firstNameError.style.display = "none";
      firstNameError.textContent = "";
      firstNameIcon.style.display = "none";
    }

    // Validate last name
    if (lastNameValue === "") {
      lastName.style.outline = "1px solid var(--red)";
      lastNameError.style.display = "block";
      lastNameError.textContent = "Last Name cannot be empty";
      lastNameIcon.style.display = "block";
      isValid = false;
    } else {
      lastName.style.outline = "1px solid var(--grayishBlue)";
      lastNameError.style.display = "none";
      lastNameError.textContent = "";
      lastNameIcon.style.display = "none";
    }

    // Validate email
    if (emailValue === "") {
      email.style.outline = "1px solid var(--red)";
      emailError.style.display = "block";
      emailError.textContent = "Email cannot be empty";
      emailIcon.style.display = "block";
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      email.style.outline = "1px solid var(--red)";
      emailError.style.display = "block";
      emailError.textContent = "Looks like this is not an email";
      emailIcon.style.display = "block";
      isValid = false;
    } else {
      email.style.outline = "1px solid var(--grayishBlue)";
      emailError.style.display = "none";
      emailError.textContent = "";
      emailIcon.style.display = "none";
    }

    // Validate password
    if (passwordValue === "") {
      password.style.outline = "1px solid var(--red)";
      passwordError.style.display = "block";
      passwordError.textContent = "Password cannot be empty";
      passwordIcon.style.display = "block";
      isValid = false;
    } else {
      password.style.outline = "1px solid var(--grayishBlue)";
      passwordError.style.display = "none";
      passwordError.textContent = "";
      passwordIcon.style.display = "none";
    }

    if (isValid) {
      submitButton.textContent = "Submitted successfully";
      setTimeout(() => {
        form.reset();
        submitButton.textContent = "Claim your free trial";
      }, 500);
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

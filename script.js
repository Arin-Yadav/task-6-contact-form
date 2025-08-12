document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-container");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate name (letters and spaces)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else if (!nameRegex.test(name)) {
      nameError.textContent = "Name must contain only letters and spaces.";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format.";
      isValid = false;
    }

    // Validate message
    if (!message) {
      messageError.textContent = "Message cannot be empty.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.display = "block";

      // Clear form and hide success message
      setTimeout(() => {
        form.reset();
        successMessage.style.display = "none";
      }, 2500);
    }
  });
});
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMessage = document.getElementById("error-message");
  const checkbox = document.getElementById("checkBox");

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters.";
    return;
  }

  if (!checkbox.checked) {
    errorMessage.textContent = "You must agree to our Terms & Conditions and Privacy Policy first.";
    return;
  }

  errorMessage.textContent = "";
  alert("Registration successful!");
});

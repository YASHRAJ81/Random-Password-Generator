const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("password-length");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~<>?{}";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let length = lengthInput.value; // Get the length from the input field
  if (length === "") {
    length = 10; // Default password length if not entered
  } else {
    length = parseInt(length); // Convert to integer
  }

  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

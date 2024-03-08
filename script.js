const passwordBox = document.getElementById("password");
let length = 12;
const charset =
	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="; // Include all characters you want to use

// Function to generate a random password
function createPassword() {
	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charset.length);
		password += charset[randomIndex];
	}
	passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
	if (passwordBox.value !== "") {
		passwordBox.select();
		document.execCommand("copy");
	} else {
		alert("No password to copy!");
	}
}

// Function to update the length of the generated password based on the slider value
function updatePasswordLength() {
	length = document.getElementById("lengthSlider").value;
	document.getElementById("lengthDisplay").textContent = length;
}


"use strict"
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerButton = document.getElementById('registerButton');
const errorMessage = document.getElementById('errorMessage');

function checkFormValidity() {
    const isUsernameValid = usernameInput.value.trim() !== '';
    const isEmailValid = emailInput.value.trim() !== '' && emailInput.checkValidity();
    const isPasswordValid = passwordInput.value.trim() !== '';
    const isConfirmPasswordValid = confirmPasswordInput.value.trim() !== '';
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message
    }
    
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && passwordInput.value === confirmPasswordInput.value) {
        registerButton.disabled = false; // Enable register button
    } else {
        registerButton.disabled = true; // Disable register button
    }
}

usernameInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);
confirmPasswordInput.addEventListener('input', checkFormValidity);

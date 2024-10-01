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
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
    
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && passwordInput.value === confirmPasswordInput.value) {
        registerButton.disabled = false;
    } else {
        registerButton.disabled = true;
    }
}

usernameInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);
confirmPasswordInput.addEventListener('input', checkFormValidity);

registerButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Registration successful! Welcome, ' + usernameInput.value + '!');
});

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerButton = document.getElementById('registerButton');

const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function checkFormValidity() {
    let isFormValid = true;

    if (usernameInput.value.trim() === '') {
        usernameError.style.display = 'block';
        usernameInput.classList.add('input-error');
        isFormValid = false;
    } else {
        usernameError.style.display = 'none';
        usernameInput.classList.remove('input-error');
    }

    if (passwordInput.value.trim() === '') {
        passwordError.style.display = 'block';
        passwordInput.classList.add('input-error');
        isFormValid = false;
    } else {
        passwordError.style.display = 'none';
        passwordInput.classList.remove('input-error');
    }

    if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordError.style.display = 'block';
        confirmPasswordInput.classList.add('input-error');
        isFormValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        confirmPasswordInput.classList.add('input-error');
        isFormValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
        confirmPasswordInput.classList.remove('input-error');
    }

    registerButton.disabled = !isFormValid;
}

usernameInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);
confirmPasswordInput.addEventListener('input', checkFormValidity);

registerButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Registration successful!');
});

"use strict"
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    let valid = true;
    let errorMessage = '';

    const userInput = document.getElementById('user');
    const passInput = document.getElementById('pass');
    const confirmInput = document.getElementById('confirm');

    if (!userInput.value) {
        errorMessage += 'Username is required.\n';
        valid = false;
    }

    if (!passInput.value) {
        errorMessage += 'Password is required.\n';
        valid = false;
    }

    if (!confirmInput.value) {
        errorMessage += 'Confirm Password is required.\n';
        valid = false;
    }

    if (!valid) {
        alert(errorMessage);
        event.preventDefault(); // منع الإرسال
    }
});
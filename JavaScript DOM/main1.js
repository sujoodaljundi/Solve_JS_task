"use strict"
    // Create label for username
    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.textContent = 'Username: ';
    
    // Create label for password
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password: ';
    
    // Create label for confirm password
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.setAttribute('for', 'confirmPassword');
    confirmPasswordLabel.textContent = 'Confirm Password: ';

    // Get the form and insert labels before the inputs
    const form = document.getElementById('myForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Insert labels before each input
    form.insertBefore(usernameLabel, usernameInput);
    form.insertBefore(passwordLabel, passwordInput);
    form.insertBefore(confirmPasswordLabel, confirmPasswordInput);

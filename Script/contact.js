const form = document.getElementById('consultationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isEmpty(value) {
    return value.trim() === '';
}

function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    messageInput.classList.remove('is-invalid');
}

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add('is-invalid');
}

function validateForm() {
    let isValid = true;

    if (isEmpty(nameInput.value)) {
        showError(nameInput, nameError, '❌ Please enter your full name');
        isValid = false;
    }

    if (isEmpty(emailInput.value)) {
        showError(emailInput, emailError, '❌ Please enter your email address');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, emailError, '❌ Please enter a valid email address (e.g., name@example.com)');
        isValid = false;
    }

    if (isEmpty(messageInput.value)) {
        showError(messageInput, messageError, '❌ Please enter your message');
        isValid = false;
    }

    return isValid;
}

function resetForm() {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    clearErrors();
}

function showSuccess() {
    successMessage.classList.remove('d-none');
    setTimeout(() => {
        successMessage.classList.add('d-none');
    }, 5000);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    clearErrors();

    successMessage.classList.add('d-none');

    if (validateForm()) {
        showSuccess();
        resetForm();
    } else {
        console.log('Form validation failed');
    }
});

nameInput.addEventListener('input', function () {
    if (!isEmpty(nameInput.value)) {
        nameError.textContent = '';
        nameInput.classList.remove('is-invalid');
    }
});

emailInput.addEventListener('input', function () {
    if (!isEmpty(emailInput.value) && isValidEmail(emailInput.value)) {
        emailError.textContent = '';
        emailInput.classList.remove('is-invalid');
    }
});

messageInput.addEventListener('input', function () {
    if (!isEmpty(messageInput.value)) {
        messageError.textContent = '';
        messageInput.classList.remove('is-invalid');
    }
});
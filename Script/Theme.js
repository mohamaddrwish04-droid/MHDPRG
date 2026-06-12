
const themeToggleBtn = document.getElementById('themeToggle');

const THEME_KEY = 'selectedTheme';

function loadSavedTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateButtonText(true);
    } else {
        document.body.classList.remove('light-theme');
        updateButtonText(false);
    }
}

function updateButtonText(isLightTheme) {
    if (isLightTheme) {
        themeToggleBtn.innerHTML = '🌙 Dark Mode';
        themeToggleBtn.classList.remove('btn-outline-light');
        themeToggleBtn.classList.add('btn-outline-dark');
    } else {
        themeToggleBtn.innerHTML = '☀️ Light Mode';
        themeToggleBtn.classList.remove('btn-outline-dark');
        themeToggleBtn.classList.add('btn-outline-light');
    }
}

function toggleTheme() {
    const isCurrentlyLight = document.body.classList.contains('light-theme');

    if (isCurrentlyLight) {
        document.body.classList.remove('light-theme');
        localStorage.setItem(THEME_KEY, 'dark');
        updateButtonText(false);
    } else {
        document.body.classList.add('light-theme');
        localStorage.setItem(THEME_KEY, 'light');
        updateButtonText(true);
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', loadSavedTheme);
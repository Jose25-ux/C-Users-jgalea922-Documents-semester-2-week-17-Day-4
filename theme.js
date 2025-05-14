
const themeToggle = document.getElementById('themeToggle');

// Load theme preference from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

// Save theme preference to localStorage
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Add keyboard shortcut for dark mode toggle (Shift + D)
document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === 'D') {
        themeToggle.click();
    }
});



const navEl = document.querySelector('header nav');
const toggleBtn = document.querySelector('header .fa-bars');
const iconElement = document.getElementById("themeToggle");
const body = document.body;

// console.log(toggleBtn)

toggleBtn.addEventListener('click', () => {
    navEl.classList.toggle('active');
    toggleBtn.classList.toggle('fa-xmark');
    // console.log(navEl);
    // console.log(toggleBtn)
});

const themePreference = localStorage.getItem('theme');

if (themePreference === 'dark') {
    body.classList.add('dark');
    iconElement.classList.add('fa-sun');
} else {
    body.classList.remove('dark');
    iconElement.classList.add('fa-moon');
}

function toggleDarkMode() {
    const isSun = iconElement.classList.contains('fa-moon');

    if (isSun) {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
        body.classList.add('dark');

        localStorage.setItem('theme', 'dark');
    }
    else {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
        body.classList.remove('dark');

        localStorage.setItem('theme', 'light');
    }
}


iconElement.addEventListener('click', toggleDarkMode);

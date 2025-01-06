// You can add interactivity here if needed
// For example, a mobile menu toggle
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.createElement('button');
toggleButton.textContent = '☰';
toggleButton.classList.add('toggle-button');

document.querySelector('header').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
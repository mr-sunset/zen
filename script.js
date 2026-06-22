document.addEventListener('DOMContentLoaded', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const wH1 = document.getElementById('w-h1');
    const wDesc = document.getElementById('w-desc');
    const wEnter = document.getElementById('w-enter');

    wEnter.addEventListener('click', () => {
        welcomeContainer.classList.add('fade-out');
    })
})
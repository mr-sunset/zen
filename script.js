document.addEventListener('DOMContentLoaded', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const wH1 = document.getElementById('w-h1');
    const wDesc = document.getElementById('w-desc');
    const wEnter = document.getElementById('w-enter');

    // Hide welcome container when button clicked
    wEnter.addEventListener('click', () => {
        welcomeContainer.classList.add('fade-out');
    })

    // Black noise logic
    
})
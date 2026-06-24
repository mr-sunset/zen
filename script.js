document.addEventListener('DOMContentLoaded', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const wH1 = document.getElementById('w-h1');
    const wDesc = document.getElementById('w-desc');
    const wControlToggle = document.getElementById('w-controls-toggle');
    const blackNoise = document.getElementById('black-noise');
    const wEnter = document.getElementById('w-enter');

    // Hide welcome container when button clicked
    wEnter.addEventListener('click', () => {
        welcomeContainer.classList.add('fade-out');
    })

    // Black noise control logic 
    wControlToggle.addEventListener('change', (event) => {
        blackNoise.controls = event.target.checked;
    })
})
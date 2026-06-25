document.addEventListener('DOMContentLoaded', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const wH1 = document.getElementById('w-h1');
    const wDesc = document.getElementById('w-desc');
    const wControlToggle = document.getElementById('w-controls-toggle');
    const blackNoise = document.getElementById('black-noise');
    const wEnter = document.getElementById('w-enter');

    // Hide welcome container when button clicked and hide cursor
    wEnter.addEventListener('click', () => {
        welcomeContainer.classList.add('fade-out');
        document.body.style.cursor = "none";
    })

    // Black noise control logic 
    wControlToggle.addEventListener('change', (event) => {
        blackNoise.controls = event.target.checked;
    })
})
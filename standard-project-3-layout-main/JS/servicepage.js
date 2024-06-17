
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card1');

    cards.forEach(card1 => {
        card1.addEventListener('mouseover', () => {
            const textOverlay = card1.querySelector('.text-overlay');
            textOverlay.style.opacity = '1';
            // textOverlay.style.textDecoration = "none";


            // textOverlay.style.transform = 'scale(2)';
        });

        card1.addEventListener('mouseout', () => {
            const textOverlay = card1.querySelector('.text-overlay');
            textOverlay.style.opacity = '0';
            // textOverlay.style.transform = 'scale(1)';
        });
    });
});
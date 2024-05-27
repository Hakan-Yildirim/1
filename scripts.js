document.addEventListener('DOMContentLoaded', () => {
    const fireworkContainer = document.querySelector('.fireworks');
    setInterval(createFirework, 500);

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        fireworkContainer.appendChild(firework);

        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
});

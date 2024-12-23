window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fade-in');
    images.forEach(img => {
        img.style.opacity = 1; 
    });
});
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
});

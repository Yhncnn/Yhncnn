window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fade-in');
    images.forEach(img => {
        img.style.opacity = 1; 
    });
});
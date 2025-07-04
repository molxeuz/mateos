const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.style.transform = window.scrollY > 50 ? 'translateY(0)' : 'translateY(-100%)';
});
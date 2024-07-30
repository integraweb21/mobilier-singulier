window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
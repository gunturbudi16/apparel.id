const navSlide = () => {
    const garis = document.querySelector('.garis');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('nav-links li');

    garis.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

    });

}
navSlide();
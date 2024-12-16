document.querySelector(".hamburger-btn").addEventListener("click", function() {
    const hamburger = this.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const buttons = document.querySelector(".buttons");

    hamburger.classList.toggle('is-closed');

    navLinks.classList.toggle('active');
    buttons.classList.toggle('active');

    mobileMenu.classList.toggle('open');
});

function revealOnScroll() {
    const reveals =document.querySelectorAll('.reveal');

    for (let i = 0; i< reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            reveals[1].classList.add('.active');
        } else {
            reveal[i].classList.remove('.active');
        }
    }
}
 
window.addEventListener('scroll', revealOnScroll);
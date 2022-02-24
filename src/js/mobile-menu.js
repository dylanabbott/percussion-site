console.log("Mobile Menu code loaded");

const btnMenu = document.getElementById("menu-button");
const mobileMenu = document.getElementById("nav");

function toggleMenu() {
    //e.preventDefault();
    btnMenu.classList.toggle("rotated");
    mobileMenu.classList.toggle("nav--hidden-on-mobile");
}

btnMenu.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);
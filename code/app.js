const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navbar');


function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}


burger.addEventListener('click', function() {
    toggleNav();
});
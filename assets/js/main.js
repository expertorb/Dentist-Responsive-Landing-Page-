let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('show-menu');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('show-menu');
}

// Tram-Slider
var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
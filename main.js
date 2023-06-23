console.log("READY");

let iconomenu = document.querySelector("#icono-menu");
let navbar = document.querySelector(".Menu");
iconomenu.onclick = () => {
    iconomenu.classList.toggle("bx-x")
    navbar.classList.toggle("activar");
};

let sections = document.querySelectorAll("section"); /*esto es para que al darle clic a cada etiqueta, nos lleve a la respectiva sección*/
let enlacesnav = document.querySelectorAll('.header .nav a');


window.onscroll = () => {
    sections.forEach(section => {
        let arriba = window.scrollY;
        let offset = section.offsetTop - 150;
        let alto= section.offsetHeight;
        let id = section.getAttribute("id");
        if (arriba >= offset && arriba < offset + alto) {
            enlacesnav.forEach(enlaces =>{
                enlaces.classList.remove("activar");
                document.querySelector(".header .nav a [href *= "+ id+"]").classList.add("activar");
  
        }); 
       };
    });
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
    iconomenu.classList.remove("bx-x");
    navbar.classList.remove("activar");
};

//slider 
const swiper = new Swiper(".mySwiper", { 
    slidesPerView: 1, 
    spaceBetween: 30, 
    loop: true, 
    grabCursor: true,
    pagination: { 
        el: ".swiper-pagination", 
        clickable: true, 
    },
    navigation: { 
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
    }, 
});

/*Cambiar color fondo modo noche con la luna y sol*/

let icononoche = document.querySelector("#icono-noche");
icononoche.onclick = () => {
    icononoche.classList.toggle("bx-sun");
    document.body.classList.toggle("modooscuro");
};

ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.content-inicio, cabecera', { origin: "top" });
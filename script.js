// Script para ocultar el menú cuando se hace scroll hacia abajo y mostrarlo cuando se hace scroll hacia arriba
let lastScrollTop = 0; // Última posición de scroll
const navbar = document.getElementById("navbar"); // Obtener el menú

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si se hace scroll hacia abajo, ocultar el menú
    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-60px"; // Oculta el menú moviéndolo hacia arriba
    } else {
        navbar.style.top = "0"; // Muestra el menú
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita que se quede negativo
});

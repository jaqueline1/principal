// Efecto de sombra para la barra de navegación al hacer scroll (Efecto Dinámico)
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Efecto avanzado tipo "linterna o resplandor" interactivo sobre las cartas
const cardsSection = document.getElementById("cards");

if (cardsSection) {
    cardsSection.onmousemove = e => {
        // Itera sobre las tarjetas para calcular donde proyectar el destello dinámico azul claro
        for(const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }
}

// Lógica para que al presionar en los enlaces, la página baje suavemente (Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Restamos 80px por el tamaño del navbar para que no lo cubra
                behavior: 'smooth' /* Comportamiento de fluidez */
            });
        }
    });
});

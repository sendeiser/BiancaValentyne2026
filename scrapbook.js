const images = window.allImages;

const quotes = [
    "Vení a dormir conmigo: no haremos el amor, él nos hará. - Julio Cortázar",
    "Si te quiero es porque sos mi amor, mi cómplice y todo. - Mario Benedetti",
    "Estábamos sin buscarnos, pero sabiendo que estábamos para encontrarnos. - Julio Cortázar",
    "Tú no sospechas cuánto y cuán deprisa estoy queriéndote. - Mario Benedetti",
    "Te espero cuando miremos al cielo de noche: tú allá, yo aquí. - Mario Benedetti",
    "Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos. - Julio Cortázar",
    "Porque, sin buscarte te ando encontrando por todos lados, principalmente cuando cierro los ojos. - Julio Cortázar",
    "Usted es la mujer que yo quiero, no la que yo necesito. - Mario Benedetti"
];

function initTimeline() {
    const container = document.getElementById('timeline-events');
    images.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-event';

        // Add a quote every few images
        if (index > 0 && index % 4 === 0) {
            const quoteDiv = document.createElement('div');
            quoteDiv.className = 'quote-section handwritten';
            quoteDiv.innerText = quotes[Math.floor(index / 4) % quotes.length];
            container.appendChild(quoteDiv);
        }

        item.innerHTML = `
            <div class="event-content">
                <div class="washi-tape"></div>
                <img src="${event.src}" alt="${event.date}" loading="lazy">
                <span class="event-date">${event.date}</span>
                <p class="event-caption handwritten">${event.caption}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function createPetals() {
    const container = document.getElementById('petals-container');
    const petalChars = ['🌸', '✨', '❤️', '🌹'];

    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerText = petalChars[Math.floor(Math.random() * petalChars.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 5) + 's';
        petal.style.opacity = Math.random();
        petal.style.fontSize = (Math.random() * 10 + 15) + 'px';

        container.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 8000);
    }, 500);
}

// Parallax Effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.event-content');

    cards.forEach((card, index) => {
        const speed = 0.05;
        const offset = (scrolled - card.offsetTop) * speed;
        // Subtle movement
        if (index % 2 === 0) {
            card.style.transform = `translateY(${offset}px) rotate(2deg)`;
        } else {
            card.style.transform = `translateY(${-offset}px) rotate(-2deg)`;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    createPetals();
});

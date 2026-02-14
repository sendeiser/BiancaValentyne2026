const images = window.allImages;

// Relationship Counter
const startDate = new Date("2025-11-01T00:00:00"); // User can adjust this

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById('time-counter').innerText =
        `${days}d ${hours}h ${mins}m ${secs}s`;
}

// Slider Logic
let currentSlide = 0;
function initSlider() {
    const track = document.getElementById('slider-track');
    images.forEach((img, i) => {
        const slide = document.createElement('div');
        slide.className = `slide ${i === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${img.src}" alt="${img.caption}">
            <div class="slide-info">
                <div class="slide-date">${img.date}</div>
                <div class="slide-caption">${img.caption}</div>
            </div>
        `;
        slide.onclick = () => {
            currentSlide = i;
            updateSlider();
        };
        track.appendChild(slide);
    });
}

function updateSlider() {
    const track = document.getElementById('slider-track');
    const slides = document.querySelectorAll('.slide');
    const offset = currentSlide * -65; // Based on min-width and margin
    track.style.transform = `translateX(${offset}vw)`;

    slides.forEach((s, i) => {
        s.classList.toggle('active', i === currentSlide);
    });
}

// Particle System
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 20 + 340}, 100%, 50%)`;
        this.life = 100;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 2;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

// Fireworks / Confetti
document.getElementById('fireworks-btn').onclick = () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff003c', '#ffffff', '#ff7eb3']
    });
};

document.getElementById('prev-btn').onclick = () => {
    if (currentSlide > 0) currentSlide--;
    updateSlider();
};

document.getElementById('next-btn').onclick = () => {
    if (currentSlide < images.length - 1) currentSlide++;
    updateSlider();
};

document.addEventListener('DOMContentLoaded', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initSlider();
    setInterval(updateCounter, 1000);
    animate();
});

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

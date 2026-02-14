const images = window.allImages;

function initGallery() {
    const grid = document.getElementById('gallery-grid');
    images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="gallery-overlay">
                <span class="item-date serif">${img.date}</span>
                <p class="item-caption serif">${img.caption}</p>
            </div>
        `;
        grid.appendChild(item);
    });
}

// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('button, a, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Scroll Reveal Logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
});

// Music Toggle (Placeholder)
const musicBtn = document.getElementById('music-toggle');
musicBtn.addEventListener('click', () => {
    alert("Aquí podrías reproducir 'Your Song' de Elton John o vuestra canción favorita.");
});

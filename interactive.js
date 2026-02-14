const images = window.allImages;
const book = document.getElementById('book');
let currentFlipped = 0;

function createPages() {
    // Each page in the DOM represents one "leaf" (two sides)
    // For simplicity, each leaf shows one memory on the front side
    images.forEach((img, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.zIndex = images.length - index;

        page.innerHTML = `
            <div class="page-content">
                <img src="${img.src}" alt="Recuerdo">
                <span class="page-date lustria">${img.date}</span>
                <p class="page-caption dancing-script">${img.caption || 'Un momento inolvidable...'}</p>
                <span class="page-number">${index + 1}</span>
            </div>
        `;

        page.addEventListener('click', () => {
            if (page.classList.contains('flipped')) {
                page.classList.remove('flipped');
                currentFlipped--;
            } else {
                page.classList.add('flipped');
                currentFlipped++;
            }
            updateBookPosition();
        });

        book.appendChild(page);
    });
}

function updateBookPosition() {
    if (currentFlipped > 0) {
        book.style.transform = 'translateX(50%) translateX(-225px)';
    } else {
        book.style.transform = 'translateX(50%)';
    }
}

document.getElementById('next-page').onclick = () => {
    const pages = document.querySelectorAll('.page:not(.flipped)');
    if (pages.length > 0) {
        const pageToFlip = pages[0];
        pageToFlip.classList.add('flipped');
        currentFlipped++;
        updateBookPosition();
    }
};

document.getElementById('prev-page').onclick = () => {
    const flippedPages = document.querySelectorAll('.page.flipped');
    if (flippedPages.length > 0) {
        const pageToUnflip = flippedPages[flippedPages.length - 1];
        pageToUnflip.classList.remove('flipped');
        currentFlipped--;
        updateBookPosition();
    }
};

// Initial position
book.style.transform = 'translateX(50%)';

document.addEventListener('DOMContentLoaded', () => {
    createPages();

    // Add cover flip logic
    const cover = document.getElementById('cover');
    cover.addEventListener('click', () => {
        // Handled by the generic logic above if it's a .page
    });
});

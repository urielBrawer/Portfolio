function createCarousel(carouselId, dotsId) {
    const carousel = document.getElementById(carouselId);
    const track = carousel.querySelector('.carousel-track');
    const images = track.querySelectorAll('img');
    const dotsContainer = document.getElementById(dotsId);

    let currentIndex = 0;

    // Erstelle die Dots basierend auf der Bildanzahl
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.dataset.index = index;
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('span');

    function updateCarousel(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Aktiviere den aktuellen Dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Event-Listener für Klick auf die Dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            updateCarousel(Number(dot.dataset.index));
        });
    });

    // Auto-Scroll alle 3 Sekunden
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }, 3000); // Geschwindigkeit: 3 Sekunden pro Bild
}

// Initialisiere die beiden Karussells
document.addEventListener("DOMContentLoaded", () => {
    createCarousel('carousel1', 'dots1');
    createCarousel('carousel2', 'dots2');
});

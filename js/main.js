// JavaScript for animations and lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const lightboxImages = document.querySelectorAll('.lightbox');

    // Intersection Observer to trigger section visibility on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Lightbox functionality
    lightboxImages.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = image.getAttribute('href');
            openLightbox(imgSrc);
        });
    });

    function openLightbox(imgSrc) {
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.classList.add('lightbox-overlay');
        lightboxOverlay.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgSrc}" alt="Enlarged Image">
                <button class="close-btn">X</button>
            </div>
        `;
        document.body.appendChild(lightboxOverlay);

        const closeBtn = lightboxOverlay.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(lightboxOverlay);
        });

        // Show lightbox
        setTimeout(() => lightboxOverlay.classList.add('visible'), 10);
    }
});

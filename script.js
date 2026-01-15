let currentSlideIndex = 0;

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlideIndex = (n + slides.length) % slides.length;

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(n) {
    showSlide(n);
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.dataset.page;

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(pageName).classList.add('active');
    });
});

// Lightbox functionality
const galleryImages = [
 "./media/IMG_1691.JPG",
];

function openLightBox(index) {
    const Lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = galleryImages[index];
    Lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightBox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightBox();
    }
});

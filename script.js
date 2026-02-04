let currentSlideIndex = 0;
let currentLightboxIndex = 0;
let autoAdvanceInterval;

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

// Loading Spinner
window.addEventListener('load', () => {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.classList.add('hidden');
    }, 700);
  }
});

// Scroll to top of page after refresh
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlideIndex = (n + slides.length) % slides.length;

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
  resetAutoAdvance();
}

function currentSlide(n) {
  showSlide(n);
  resetAutoAdvance();
}

// Auto-advance carousel every 5 seconds
function startAutoAdvance() {
  autoAdvanceInterval = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

function resetAutoAdvance() {
  clearInterval(autoAdvanceInterval);
  startAutoAdvance();
}

startAutoAdvance();

// Navigation
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageName = link.dataset.page;

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    pages.forEach((p) => p.classList.remove("active"));
    document.getElementById(pageName).classList.add("active");

    window.scrollTo(0, 0);
  });
});

// Lightbox functionality
const galleryItems = [
  { type: "video", src: "./media/cutClip.mp4" },
  { type: "video", src: "./media/cutClip2.mp4" },
  { type: "video", src: "./media/cutClip3.mp4" },
  { type: "video", src: "./media/cutClip4.mp4" },
  { type: "video", src: "./media/cutClip5.mp4" },
  { type: "video", src: "./media/cutClip6.mp4" },
  { type: "video", src: "./media/cutClip7.mp4" },
  { type: "video", src: "./media/cutClip8.mp4" },
  { type: "video", src: "./media/cutClip9.mp4" },
  { type: "video", src: "./media/cutClip10.mp4" },
  { type: "video", src: "./media/cutClip11.mp4" },
  { type: "video", src: "./media/cutClip12.mp4" },
  { type: "video", src: "./media/cutClip13.mp4" },
  { type: "video", src: "./media/cutClip14.mp4" },
  { type: "video", src: "./media/cutClip15.mp4" },
  { type: "video", src: "./media/cutClip16.mp4" },
  { type: "video", src: "./media/cutClip17.mp4" },
  { type: "video", src: "./media/cutClip18.mp4" },
  { type: "video", src: "./media/cutClip19.mp4" },
  { type: "video", src: "./media/cutClip20.mp4" },
  { type: "video", src: "./media/cutClip21.mp4" },
  { type: "video", src: "./media/cutClip22.mp4" },
  { type: "video", src: "./media/cutClip23.mp4" },
  { type: "video", src: "./media/cutClip24.mp4" },
  { type: "video", src: "./media/cutClip25.mp4" },
  { type: "video", src: "./media/cutClip26.mp4" },
  { type: "video", src: "./media/cutClip27.mp4" },
  { type: "video", src: "./media/cutClip28.mp4" },
  { type: "video", src: "./media/cutClip29.mp4" },
  { type: "video", src: "./media/cutClip30.mp4" },
  { type: "video", src: "./media/cutClip31.mp4" },
  { type: "video", src: "./media/cutClip32.mp4" },
  { type: "video", src: "./media/cutClip33.mp4" },
  { type: "video", src: "./media/cutClip34.mp4" },
  { type: "image", src: "./media/IMG_1691.JPG" },
];

function openLightBox(index) {
  currentLightboxIndex = index;
  showLightBoxItem(index);

  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('active');
  document.body.style.overflow = "hidden";
}

function showLightBoxItem(index) {
  const lightboxContent = document.querySelector(".lightbox-content");
  lightboxContent.innerHTML = "";

  const item = galleryItems[index];

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = "Gallery Image";
    lightboxContent.appendChild(img);
  } else if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.autoplay = false;
    video.muted = true;
    lightboxContent.appendChild(video);
  }
}

function navigateLightBox(direction) {
  // Calculate new index with wraparound (like in carousel)
  currentLightboxIndex = (currentLightboxIndex + direction + galleryItems.length) % galleryItems.length;

  // Pause any playing video before switching
  const currentVideo = document.querySelector(".lightbox-content video");
  if (currentVideo) {
    currentVideo.pause();
  }

  showLightBoxItem(currentLightboxIndex);
}

function closeLightBox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");

  const video = lightboxContent.querySelector("video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightBox();
  }

  // Arrow Navigation in lightbox
  const lightbox = document.getElementById('lightbox');
  if (lightbox && lightbox.classList.contains("active")) {
    if (e.key === "ArrowLeft") {
      navigateLightBox(-1);
    } else if (e.key === "ArrowRight") {
      navigateLightBox(1);
    }
  }
});

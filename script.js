let currentSlideIndex = 0;

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlideIndex = (n + slides.length) % slides.length;

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
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
  { type: "image", src: "./media/IMG_1691.JPG" },
];

function openLightBox(index) {
  const Lightbox = document.getElementById("lightbox");
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
    video.muted = false;
    lightboxContent.appendChild(video);
  }

  Lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightBox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");

  const video = lightboxContent.querySelector("video");
  if (video) {
    video.pause;
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
});

const slides = document.querySelectorAll(".item");
const background = document.querySelector(".background");
const backgroundTitle = document.getElementById("backgroundTitle");
const backgroundDescription = document.getElementById("backgroundDescription");

const slideData = [
    { title: "First Slide", description: "This is the first slide description." },
    { title: "Second Slide", description: "Here is some info about slide two." },
    { title: "Third Slide", description: "Discover what slide three is about." },
    { title: "Fourth Slide", description: "Final slide with more details!" }
];

let currentIndex = 0;

function updateSlide() {
    background.style.backgroundImage = `url(${slides[currentIndex].src})`;
    backgroundTitle.textContent = slideData[currentIndex].title; 
    backgroundDescription.textContent = slideData[currentIndex].description; 
}

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

updateSlide(); // Initialize first slide

document.addEventListener("DOMContentLoaded", function () {
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const slide = document.querySelector(".slide");
    const background = document.querySelector(".background");

    function updateBackground() {
        // Get the first image in the slide (currently active one)
        const activeImage = document.querySelector(".item");
        if (activeImage) {
            background.style.backgroundImage = `url(${activeImage.src})`;
        }
    }

    prev.addEventListener("click", () => {
        const items = document.querySelectorAll(".item");
        slide.prepend(items[items.length - 1]); // Move last image to the front
        updateBackground(); // Update background
    });

    next.addEventListener("click", () => {
        const items = document.querySelectorAll(".item");
        slide.appendChild(items[0]); // Move first image to the back
        updateBackground(); // Update background
    });

    // Set initial background
    updateBackground();
});

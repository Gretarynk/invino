const slides = document.querySelectorAll('.slide');
const sliderWrapper = document.querySelector('.slider-wrapper');

let currentIndex = 0;
let direction=1;

const preloadImages = () => {
    slides.forEach((slide, index) => {
        const tempImg = new Image();
        tempImg.src = slide.src; // Directly access the src of the slide
        tempImg.onload = () => console.log(`Image ${index} preloaded: ${slide.src}`);
        tempImg.onerror = () => console.error(`Failed to preload image ${index}: ${slide.src}`);
    });
};


preloadImages();


const showNextSlide = () => {
    slides[currentIndex].classList.remove('active'); // Remove active class from current slide
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    slides[currentIndex].classList.add('active'); // Add active class to the next slide
};


let intervalId = setInterval(showNextSlide, 6000);




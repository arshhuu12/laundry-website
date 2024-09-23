document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    // Display the first image
    carouselItems[currentIndex].classList.add('active');
  
    // Handle next button click
    document.getElementById('next').addEventListener('click', () => {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;  // Cycle through images
      carouselItems[currentIndex].classList.add('active');
    });
  
    // Handle previous button click
    document.getElementById('prev').addEventListener('click', () => {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
    });
  });
// FAQ Toggle Function
function toggleFAQ(faqNumber) {
    const faqElement = document.getElementById(`faq${faqNumber}`);
    faqElement.classList.toggle('hidden');
}

// Fade-in Animation on Scroll
window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            el.classList.add('animate-fade');
        }
    });
});

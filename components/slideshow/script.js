// Initial state of WebPage
let slideIndex = 1;

// DOM Cache
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous')
const dots = document.querySelectorAll('.dot');

nextBtn.addEventListener('click', () => plusSlides(1));
previousBtn.addEventListener('click', () => plusSlides(-1));
dots.forEach(dot => dot.addEventListener('click', () => currentSlide(dot.id)))

// Next/Previous controls
function plusSlides(n = 1) {
  showSlides((slideIndex += n));
}


// Dot controls
function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  const slides = document.querySelectorAll('.mySlides')
  // Checking if n is within acceptable range (n < slide.length && n > 1)
  if(n > slides.length) {slideIndex = 1}
  if(n < 1) {slideIndex = slides.length}

  // Resetting display for slides and dots
  slides.forEach(slide => slide.style.display =  'none')
  dots.forEach(dot => dot.className = dot.className.replace(' active', ''))

  slides[slideIndex -1].style.display = 'block';
  dots[slideIndex -1].className += ' active';

}

function automaticSlideChange() {
  plusSlides(1);
  setTimeout(automaticSlideChange, 5000);
}

automaticSlideChange();

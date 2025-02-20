let slides = document.querySelectorAll('.carousel .carousel-items .slide');
let forward = document.getElementById('forward');
let previous = document.getElementById('previous');
let thumbs = document.querySelectorAll('.preview .thumb');

// configuration parameters
let totalSlides = slides.length;
let activeSlide = 0;

// forward button click event
forward.onclick = function(){
    activeSlide++;
    if(activeSlide >= totalSlides){
        activeSlide = 0;
    }
    displaySlide();
}

// previous button click event
previous.onclick = function(){
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = totalSlides - 1;
    }
    displaySlide();
}

// automatic slideshow
let autoSlide = setInterval(() => {
    forward.click();
}, 5000);

function displaySlide(){
    // remove previous active slide
    let oldActiveSlide = document.querySelector('.carousel .carousel-items .slide.active');
    let oldActiveThumb = document.querySelector('.preview .thumb.active');
    oldActiveSlide.classList.remove('active');
    oldActiveThumb.classList.remove('active');

    // activate new slide
    slides[activeSlide].classList.add('active');
    thumbs[activeSlide].classList.add('active');
    adjustThumbnailPosition();

    // reset automatic slide timer
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        forward.click();
    }, 5000);
}

function adjustThumbnailPosition() {
    let activeThumb = document.querySelector('.preview .thumb.active');
    let thumbPosition = activeThumb.getBoundingClientRect();
    if (thumbPosition.left < 0 || thumbPosition.right > window.innerWidth) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// thumbnail click event
thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
        activeSlide = idx;
        displaySlide();
    });
});

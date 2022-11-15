//Menu 
const burger = document.querySelector('.header__nav-burger');
const homeContainer = document.querySelector('.home__container');
const mainContainer = document.querySelector('.main__container');
const mainContainerMenu = document.querySelector('.main__container-menu');

burger.addEventListener('click', function(event) {
    if (event.target.closest('.header__nav-burger')) {
        burger.classList.toggle('active');

        homeContainer.classList.toggle('active');
        
        mainContainer.classList.toggle('active');

        mainContainerMenu.classList.toggle('active');
    };
})


// Scroll
const anchors = document.querySelectorAll('.nav-link[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};


// Slider
function slider( selectorSliderImg, selectorArrayLeft, selectorArrayRight, selectorScrollRow, selectorScrollPoint ) {
    const sliderImg = document.querySelectorAll(selectorSliderImg);
    const arrayLeft = document.querySelectorAll(selectorArrayLeft);
    const arrayRight = document.querySelectorAll(selectorArrayRight);
    const scrollRow = document.querySelector(selectorScrollRow);
    const scrollPoint = document.querySelectorAll(selectorScrollPoint);

    let imgWidth = sliderImg[0].width + 10;
    let allImgWidth = imgWidth * (sliderImg.length - 1);
    let startSlider = 0;

    currentSlide = startSlider;
    let scrollPointMap = new Map();
    for( let point of scrollPoint) {
        scrollPointMap.set(point, currentSlide);

        currentSlide += imgWidth;
    };

    for( let [key, values] of scrollPointMap ) {
        key.addEventListener( 'click', function(event) {
            scrollRow.style.right = values + 'px';

            key.classList.toggle('active');

            currentSlide = values;

            for( let [key, values] of scrollPointMap ) {
                if( currentSlide != values ) key.classList.remove('active');
            };
        } );
    };

    arrayLeft.forEach(array => {
        array.addEventListener('click', function(e) {
            startSlider -= imgWidth;
    
            if (startSlider < 0 ) {
                startSlider = allImgWidth;
            }
            scrollRow.style.right = startSlider + 'px';

            currentSlide = startSlider;

            for( let [key, values] of scrollPointMap ) {
                if( currentSlide == values ) {
                    key.classList.toggle('active');
                } else {
                    key.classList.remove('active');
                };
            };
        });
    });
    
    arrayRight.forEach(array => {
        array.addEventListener('click', function(e) {
            startSlider += imgWidth;
    
            if (startSlider > allImgWidth ) {
                startSlider = 0;
            }
            scrollRow.style.right = startSlider + 'px';

            currentSlide = startSlider;

            for( let [key, values] of scrollPointMap ) {
                if( currentSlide == values ) {
                    key.classList.toggle('active');
                } else {
                    key.classList.remove('active');
                };
            };
        });
    });

    sliderImg.forEach(img => {
        img.addEventListener('click', function(e) {
            startSlider += imgWidth;
    
            if (startSlider > allImgWidth ) {
                startSlider = 0;
            }
            scrollRow.style.right = startSlider + 'px';

            currentSlide = startSlider;

            for( let [key, values] of scrollPointMap ) {
                if( currentSlide == values ) {
                    key.classList.toggle('active');
                } else {
                    key.classList.remove('active');
                };
            };
        });
    })
}

slider('.equipment__block-photo-row-img', '.array-left', '.array-right', '.equipment__block-photo-row', '.equipment__block-point-dot-img');

slider('.about-us__content-photo-img-picture', '.about-us__arr-left', '.about-us__arr-right', '.about-us__content-photo-img-row', '.about-us__point-dot-img');


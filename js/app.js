//Menu 
const burger = document.querySelector('.header__nav-burger');

burger.addEventListener('click', function(event) {
    if (event.target.closest('.header__nav-burger')) {
        burger.classList.toggle('active');
    };
})


// Scroll
const anchors = document.querySelectorAll('.nav-link[href*="#"]')

console.log(anchors)

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};


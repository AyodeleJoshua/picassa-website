const arrowDown = document.querySelector('.js--arrow-down');
const picassaPanelOptionOne = document.querySelector('.js--option-1');
const picassaPanelOptionTwo = document.querySelector('.js--option-2');
const picassaPanelOptionThree = document.querySelector('.js--option-3');
const picassaSlideOptionOne = document.querySelector('.js--slide-option-1');
const picassaSlideOptionTwo = document.querySelector('.js--slide-option-2');
const picassaSlideOptionThree = document.querySelector('.js--slide-option-3');
const picassaBody = document.querySelector('.js--picassa-main');
const picassaGeneric = document.querySelector('.js--picassa-generic');
const picassaReference = document.querySelector('.js--picassa-reference');
const buttons = document.querySelector('button');
const sticky = document.querySelector('.sticky');
const slideNav = document.querySelector('.slide-nav');
const section = document.querySelector('section');
const header = document.querySelector('header');
const close = document.querySelector('.close');

//================ reuseables ===============================
function flipDisplay(elementOn, firstOff, secondOff) {
    elementOn.style.display = 'block';
    firstOff.style.display = 'none';
    secondOff.style.display = 'none';
}
// =========================================================

arrowDown.addEventListener('click',(e) => {
    scrollBy(0,window.innerHeight / 2);
});

const optionOne = [picassaPanelOptionOne, picassaSlideOptionOne];
for (let option of optionOne) {
    option.addEventListener('click', (e) => {
        flipDisplay(picassaBody,picassaGeneric,picassaReference);
    });
}

const optionTwo = [picassaPanelOptionTwo, picassaSlideOptionTwo];
for (let option of optionTwo) {
    option.addEventListener('click', (e) => {
        flipDisplay(picassaGeneric,picassaBody,picassaReference);
    });
}

const optionThree = [picassaPanelOptionThree, picassaSlideOptionThree];
for (let option of optionThree) {
    option.addEventListener('click', (e) => {
        flipDisplay(picassaReference,picassaBody,picassaGeneric);
    });
}

let clicked = false;
sticky.addEventListener('click',(e) => {
    slideNav.style.transition = '0.5s';
    slideNav.style.display = 'flex';
    sticky.style.display = 'none';
    clicked = true;
});

const arr = [section, close];

for (let ele of arr) {
    ele.addEventListener('click',(e) => {
        if (clicked) {
            slideNav.style.display = 'none';
            sticky.style.display = 'flex';
            clicked = false;
        }
    });
}

setInterval(checkScrollLevel, 50);
function checkScrollLevel() {
    if (window.innerWidth < 1024 && scrollY > 500) {
        sticky.style.visibility = 'visible';
    } else {
        sticky.style.visibility = 'hidden';
        slideNav.style.display = 'none';
        
    }
}
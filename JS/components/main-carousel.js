const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 200

btnRight.addEventListener('click', function () {
    pixels = pixels + 200;
    elements.style = `transform: translateX(${pixels}px);`;
});

btnLeft.addEventListener('click', function () {
    pixels = pixels - 200;
    elements.style = `transform: translateX(${pixels}px);`;
});
const sliderButtonPrev = document.querySelector('.bwdbtn');
const sliderButtonNext = document.querySelector('.fwdbtn');

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');

sliderButtonPrev.addEventListener("click", function (){
    text1.classList.toggle("slide-left");
    text2.classList.toggle("slide-right");
    image1.classList.toggle("slide-left");
    image2.classList.toggle("slide-right");
});

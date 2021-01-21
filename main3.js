const slideList = [{
 img: "images/green.jpg",
 text: 'Bracia Słowianie'
},
{
 img: "images/city.jpg",
 text: 'Drugi tekst'
},
{
 img: "images/green.jpg",
 text: 'Trzeci tekst'
}];
const image = document.getElementsByTagName('header');


const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 3000;
let active = 0;

// Implementacje

const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = () => {
 active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot()
}
let indexInterval = setInterval(changeSlide, time)

// Klawisze
const keyChangeSlide = (e) => {
 console.log(e.keyCode);
 if (e.keyCode == 37 || e.keyCode == 39) {
  clearInterval(indexInterval)
  e.keyCode == 37 ? active-- : active++;
  if (active === slideList.length) {
   active = 0;
  } else if (active < 0) {
   active = slideList.length - 1;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
  indexInterval = setInterval(changeSlide, time)
 }
}

window.addEventListener('keydown', keyChangeSlide)

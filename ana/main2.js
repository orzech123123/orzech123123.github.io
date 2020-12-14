// Hey-----------------------------------------------------------

const btnMes1 = document.querySelector('.hey');
const spnText1 = document.querySelector('.text1');
const spnCursor1 = document.querySelector('.cursor1');
const txt1 = ['Cześć!', 'Jesteś słowianinem?', 'Płynie w Tobie słowiańska krew?', 'Szukasz ludzi takich jak my?', 'Uważasz, że coś jest na rzeczy a nie wiesz co?', 'Cenisz sobie duchowy rozwój a psylocybinowe doznania tylko to potwierdziły?', 'Pomożemy!!!', 'Zapoznaj się tylko z dalszą treścią strony, a ukojenie powróci!', '']

let activeLetter1 = -15;
let activeText1 = 0;

// Implementacja
const addLetter = () => {
 // Użyj w środku setTimeout
 if (activeLetter1 >= 0) {
  spnText1.textContent += txt1[activeText1][activeLetter1];
 }
 activeLetter1++;
 if (activeLetter1 === txt1[activeText1].length) {
  activeText1++
  if (activeText1 === txt1.length) return;

  setTimeout(() => {
   activeLetter1 = -15;
   spnText1.textContent = "";
   addLetter();
  }, 2000)

  return;
 }

 setTimeout(addLetter, 100)
}


// addLetter(); 



const cursorAnimation2 = () => {
 spnCursor1.classList.toggle('active');
}


btnMes1.addEventListener('click', () => {
 btnMes1.style.display = 'none';
 setInterval(cursorAnimation2, 400);
 activeLetter1 = -15;
 activeText1 = 0;
 addLetter();
 ;
});
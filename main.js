const btnMes = document.querySelector(".start");
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor consectetur magni aperiam aliquam laudantium laborum in quidem temporibus, pariatur odit maiores natus, at beatae error velit illo saepe ratione quaerat reprehenderit sapiente. Aliquid placeat enim iusto accusantium nemo! A ullam corrupti quasi!'

let indexText = 0;
const time = 50;
let indexTyping;

const showMessage = () => {
  spnText.textContent += txt[indexText]
  indexText++;

  if (indexText === txt.length)
    clearInterval(indexTyping);
}

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
}

btnMes.addEventListener("click", () => {
  indexText = 0;
  btnMes.style.display = "none";
  setInterval(cursorAnimation, 400);
  setTimeout(() => {
    indexTyping = setInterval(showMessage, time);
  }, 2000)
});
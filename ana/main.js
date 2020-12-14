const btnMes = document.querySelector(".start");
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor consectetur magni aperiam aliquam laudantium laborum in quidem temporibus, pariatur odit maiores natus, at beatae error velit illo saepe ratione quaerat reprehenderit sapiente. Aliquid placeat enim iusto accusantium nemo! A ullam corrupti quasi! Harum quam nihil dolores, non facilis quas suscipit magni eos pariatur nisi et veniam repudiandae asperiores accusantium dicta doloribus ratione sed excepturi, dolore, rem ipsa corporis quae? Laudantium accusamus eum quisquam provident dignissimos inventore, earum, exercitationem, excepturi fugit possimus facilis aliquam minima nulla ipsum officia sunt non ratione doloribus velit rem libero adipisci iste. Labore deleniti eum rerum ad ipsam ipsum veritatis, dolorum perspiciatis, unde quas perferendis. Earum obcaecati odio ea? Temporibus esse repellat nihil. Sed pariatur veniam, id quo exercitationem ipsam autem ab aliquid repudiandae blanditiis illo! Veniam aut culpa voluptates, laboriosam natus magnam quos rerum dicta minus modi placeat doloribus laborum consequatur nostrum, neque ratione nemo fuga quaerat repellat.'

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



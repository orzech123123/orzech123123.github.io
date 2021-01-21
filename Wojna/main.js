const h1Text = document.querySelector('.text');
var currentContent;

let indexText = 0;

const addLetter = () => {
    h1Text.textContent += currentContent[indexText];
    indexText++;
    if (indexText === currentContent.length) clearInterval(indexTyping);
}

var indexTyping;
const drawTitle = (content) => {
    currentContent = content;
    indexText = 0;
    h1Text.textContent = "";
    indexTyping = setInterval(() => {
        addLetter();
    }, 90);
}

drawTitle("Gra karciana typu wojna :D :D :D")
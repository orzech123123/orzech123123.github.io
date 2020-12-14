// const swarga = document.getElementsByClassName('.logo');

let swargaX = 0;
let swargaY = 0;

document.querySelector('.logo').style.left = `${swargaX}px`;
document.querySelector('.logo').style.top = `${swargaY}px`;

let drawActive = false;

let insertSwargaX;
let insertSwargaY;

document.querySelector('.logo').addEventListener('mousedown', (e) => {
    console.log("up")
    // console.log(e.clientX, e.clientY);
    document.querySelector('.logo').style.backgroundColor = 'transparent';
    drawActive = true;
    insertSwargaX = e.offsetX;
    insertSwargaY = e.offsetY;
    // console.log(insertSwargaX, insertSwargaY);
})

document.querySelector('.logo').addEventListener('mousemove', (e) => {
    if (drawActive) {
        swargaX = e.clientX - insertSwargaX;
        swargaY = e.clientY - insertSwargaY;
        document.querySelector('.logo').style.left = `${swargaX}px`;
        document.querySelector('.logo').style.top = `${swargaY}px`;
    }
})

document.querySelector('.logo').addEventListener("mouseup", () => {
    drawActive = false;
    console.log("up")
    // drawActive = false;
})

function sketchGrid(rows, cols){
    const container = document.querySelector('#container');


for (let i = 0; i < rows * cols; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
}

}

sketchGrid(16, 16);

const cells = document.querySelectorAll('.grid-cell');
const colorChoice = document.querySelector('#colorWheel');

function rainbow(event) {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}

cells.forEach(cell => {
    cell.addEventListener('mouseover', rainbow);
});







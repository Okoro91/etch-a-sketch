
function sketchGrid(rows, cols){
    const container = document.querySelector('#container');


for (let i = 0; i < rows * cols; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
}

}

sketchGrid(16, 16);








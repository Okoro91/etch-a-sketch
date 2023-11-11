

const container = document.querySelector('#container');



function sketchGrid(gridCell){
    
    

for (let i = 0; i < gridCell * gridCell; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
}

}






sketchGrid(32);







const cells = document.querySelectorAll('.grid-cell');

//rain color created here
function rainbow(event) {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}

// other color choice created here

const colorChoice = document.querySelector('#color-wheel');
let colorPicker = (event) => {
    event.target.style.backgroundColor = colorChoice.value;
}

// eraser cell 

let eraser = (event) => {
    event.target.style.backgroundColor = '#d3e4e3';
}




const rainbowButton = document.querySelector('#rainbow');
const colorButton = document.querySelector('#color-change');
const eraseButton = document.querySelector('#erase');
const clearButton = document.querySelector('#clear');

rainbowButton.addEventListener('click', () => {
  rainbowButton.classList.add('active');
  colorButton.classList.remove('active');
  eraseButton.classList.remove('active');
  clearButton.classList.remove('active');
    cellColor();
  cellColor();
});

colorButton.addEventListener('click', () => {
  rainbowButton.classList.remove('active');
  colorButton.classList.add('active');
  eraseButton.classList.remove('active');
  clearButton.classList.remove('active');
    cellColor();
  cellColor();
});

eraseButton.addEventListener('click', () => {
  rainbowButton.classList.remove('active');
  colorButton.classList.remove('active');
  eraseButton.classList.add('active');
  cellColor();
  clearButton.classList.remove('active');
    cellColor();
});



const cellColor = function () {
    const activeButton = document.querySelector('.active');

    if (activeButton && activeButton.id === 'color-change') {
        cells.forEach(cell => {
            cell.addEventListener('mouseover', colorPicker);
        });
    } else if (activeButton && activeButton.id === 'rainbow') {
        cells.forEach(cell => {
            cell.addEventListener('mouseover', rainbow);
        });
    } else if (activeButton && activeButton.id === 'erase') {
        cells.forEach(cell => {
            cell.addEventListener('mouseover', eraser);
        });
    }
}



// clear all cell function

clearButton.addEventListener('click', () => {
    clear();
  });

let clear = (event) => {
    cells.forEach(cell => {
        cell.style.backgroundColor = ''; 
      });
}
const container = document.querySelector('#container');
const gridSize = document.querySelector('#grid-size');
const gridText = document.querySelector('#grid-text');

gridSize.addEventListener('input', updateGridSize);
const showValue = gridSize.value;
gridText.textContent = `${showValue} x ${showValue}`;

function sketchGrid(gridCell) {
  container.innerHTML = ''; 

  for (let i = 0; i < gridCell * gridCell; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell);
  }

  container.style.gridTemplateColumns = `repeat(${gridCell}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridCell}, 1fr)`;

  const cells = document.querySelectorAll('.grid-cell');
  cellColor(cells);
}


//rainbow color created here
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
event.target.style.backgroundColor = '#eff5f4';
}


function cellColor(cells) {
  const activeButton = document.querySelector('.active');

  // Remove existing event listeners from all cells
  cells.forEach(cell => {
    cell.removeEventListener('mouseover', colorPicker);
    cell.removeEventListener('mouseover', rainbow);
    cell.removeEventListener('mouseover', eraser);
  });

  // Add new event listener based on the active button
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

function updateGridSize() {
  const newValue = gridSize.value;
  gridText.textContent = `${newValue} x ${newValue}`;;
  sketchGrid(newValue);
}

sketchGrid(16);

// Color buttons and event listeners
const rainbowButton = document.querySelector('#rainbow');
const colorButton = document.querySelector('#color-change');
const eraseButton = document.querySelector('#erase');

colorButton.addEventListener('click', () => {
  colorButton.classList.add('active');
  rainbowButton.classList.remove('active');
  eraseButton.classList.remove('active');
  const cells = document.querySelectorAll('.grid-cell'); 
  cellColor(cells);
});

rainbowButton.addEventListener('click', () => {
  colorButton.classList.remove('active');
  rainbowButton.classList.add('active');
  eraseButton.classList.remove('active');
  const cells = document.querySelectorAll('.grid-cell'); 
  cellColor(cells);
});

eraseButton.addEventListener('click', () => {
  rainbowButton.classList.remove('active');
  colorButton.classList.remove('active');
  eraseButton.classList.add('active');
  const cells = document.querySelectorAll('.grid-cell'); 
  cellColor(cells);
});

// Clear button and event listener
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  clear();
});

function clear() {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = '';
  });
}




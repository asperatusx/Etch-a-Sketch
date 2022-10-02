function appendGridItems(num) {
    removeGridItems();
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    num *= num;
    for (let i = 1; i <=num; i++){
        const gridContainer = document.querySelector('.grid-container');
        const gridItem = document.createElement('div');     
        gridItem.classList.add('grid-item');       
        gridContainer.appendChild(gridItem);
    }

    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => item.addEventListener('mouseover', fillDiv));  
}


function removeGridItems() {
    const gridContainer = document.querySelector('.grid-container');
    const gridItem = document.createElement('div');
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


function getGridSize() {
    let gridSize =  prompt("Enter the number of squares for one side: ", 10);
    if (gridSize === null) return;
    appendGridItems(gridSize);
}


function resetGrid() {
    const divs = document.querySelectorAll('.fillBox');
    console.log(divs);
    divs.forEach(item => item.classList.remove('fillBox'));
    
}

function fillDiv(e) {
    this.classList.add('fillBox');  
}


const newGridBtn = document.querySelector('.newGridBtn');
newGridBtn.addEventListener('click', getGridSize);

const resetGridBtn = document.querySelector('.resetGridBtn');
resetGridBtn.addEventListener('click', resetGrid);


appendGridItems(10);





















/*
if (this.className.includes('fillBox')){
    this.classList.remove('fillBox');
    return;
};
*/
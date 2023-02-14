const gridCont = document.getElementById("grid-container")
// const gridSize = prompt('Please enter a grid size')

// buildGrid(gridSize)

function buildGrid(size){
    let removeCells = gridCont.querySelectorAll("div");
    removeCells.forEach((div) => div.remove);

    gridCont.style.setProperty('--grid-cols', size);
    gridCont.style.setProperty('--grid-rows', size);
    for (i = 0; i < (size*size); i++){
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        cell.setAttribute('class', 'grid-cell');
        cell.addEventListener('mouseover', colourCell);
        gridCont.appendChild(cell);        
    };
};
  
function colourCell(){
    this.style.backgroundColor = 'black';
}

function changeGridSize(input){
    buildGrid(input);
}
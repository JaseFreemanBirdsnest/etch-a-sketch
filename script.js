const gridCont = document.getElementById("grid-container")
const gridSize = prompt('Please enter a grid size')

buildGrid(gridSize,gridSize)

function buildGrid(col,row){
    gridCont.style.setProperty('--grid-cols', col);
    gridCont.style.setProperty('--grid-rows', row);
    for (i = 0; i < (col*row); i++){
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        cell.setAttribute('class', 'grid-cell');

        gridCont.appendChild(cell);        
    };
};
  

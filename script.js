const gridCont = document.getElementById("grid-container")
const gridSize = prompt('Please enter a grid size')

buildGrid(gridSize,gridSize)

function buildGrid(col,row){
    gridCont.style.setProperty('--grid-cols', col);
    gridCont.style.setProperty('--grid-rows', row);
    for (i = 0; i < (col*row); i++){
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        cell.setAttribute('onClick', 'changeColour()');
        cell.setAttribute('class', 'cellColour');
        cell.setAttribute('id', 'cell'+(i+1));
        gridCont.appendChild(cell);        
    };
};
  
function changeColour(){
    let cellToChange = document.getElementsByClassName('cellColour'), i, len;

    for (i=0, len = cellToChange.length; i < len; i++){
        cellToChange[i].style.color = "black"
    }
}
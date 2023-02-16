const gridCont = document.getElementById("grid-container");
const errorMessage = document.getElementById("error-message");
let click = true;


function buildGrid(size){
    let removeCells = gridCont.querySelectorAll("grid-cell");
    removeCells.forEach((div) => div.remove);

    gridCont.style.setProperty('--grid-cols', size);
    gridCont.style.setProperty('--grid-rows', size);
    for (i = 0; i < (size*size); i++){
        let cell = document.createElement("div");
        cell.setAttribute('class', 'grid-cell');
        cell.addEventListener('mouseover', colourCell);
        gridCont.appendChild(cell);        
    };
};
  
function colourCell(){
    if(click){ 
        this.style.backgroundColor = 'blue';
    }
    
}

function changeGridSize(input){
    if(input >= 2 && input <= 100){
            buildGrid(input);
    } else {
    const errorMessage = document.getElementById("error-message");
    let diffInput = document.createElement("div");
    diffInput.innerText = ("Please enter a number between 2 and 100");
    errorMessage.appendChild(diffInput);
    }
}

function clearGrid(){
    let gridCont = document.getElementById("grid-container");
    let cells = gridCont.querySelectorAll("div");
    cells.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", (e) =>{
        if(e.target.tagName != "BUTTON"){  
            click = !click;
        }
    }
)
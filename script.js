const gridCont = document.getElementById("grid-container")


function buildGrid(col,row){
    gridCont.style.setProperty('--grid-cols', col);
    gridCont.style.setProperty('--grid-rows', row);
    for (i = 0; i < (col*row); i++){
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        gridCont.appendChild(cell);
        
    };
};

buildGrid(4,4);
const gameBoard = {
    gameboard: [],

}

const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "jenn",
    marker: "O"
}

const gameFlow = {

}

let span = document.createElement("span");
span.style.fontSize = "100px";
span.style.height = "100%";
span.style.display = "flex";
span.style.justifyContent = "center";
span.style.alignItems = "center";
// construct new spans with constructor
// then alternate while loop between X and O
// check if win or tie by iterating through
let square = document.getElementsByClassName("square");
for( let i = 0; i < square.length; i++){
    square[i].addEventListener("click", function(){ 
        let newSpan = span.cloneNode();
        newSpan.appendChild(document.createTextNode("X"));
        square[i].appendChild(newSpan); 
    } );
    
}
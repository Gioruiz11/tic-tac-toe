// a module, because it will only be used once
const gameBoard = (() => {
    let array = [];
    

})();

const playerOne = {
    name: "tim",
    marker: "X",
}

const playerTwo = {
    name: "jenn",
    marker: "O"
}

const gameFlow = (() => { 
    // Create spans that make marker appropriate size
    let span = document.createElement("span");
    span.style.fontSize = "100px";
    span.style.height = "100%";
    span.style.display = "flex";
    span.style.justifyContent = "center";
    span.style.alignItems = "center";

    let square = document.getElementsByClassName("square");
    let counter = 0;

    // Resets board so players can play again
    const reset = () => {

    }

    // Checks every square to see if a player has won
    const checkWin = () => {
        for( let i = 0; i < square.length; i++){
            if(square[0].textContent.includes("X")){
                alert("X Wins!");
            };
    };
    };

    // Sets up the board so X's and O's can be placed
    const setupGame = () => {
        for( let i = 0; i < square.length; i++){
            // adds click event listener to every square
            square[i].addEventListener("click", function(){ 
                let newSpan = span.cloneNode();
                if(counter % 2 == 0){
                    newSpan.appendChild(document.createTextNode("X"));
                }
                else{
                    newSpan.appendChild(document.createTextNode("O"));
                }
                counter++;
                square[i].appendChild(newSpan);
                checkWin();
        }, {once: true} );
        
    }
    };
    return {setupGame};


})();

gameFlow.setupGame();

// algorithm: 
// construct new spans with constructor
// then alternate while loop between X and O
// check if win or tie by iterating through



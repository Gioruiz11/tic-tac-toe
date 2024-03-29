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
        for( let i = 0; i < square.length; i++){
            let span = document.querySelector("span");
            span.remove();
        }
    }

    // Checks every square to see if a player has won
    const checkWin = () => {
            if(square[0].textContent.includes("X") && 
            square[3].textContent.includes("X") &&
            square[6].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[0].textContent.includes("O") && 
            square[3].textContent.includes("O") &&
            square[6].textContent.includes("O")){
                alert("O Wins!");
            };
            if(square[1].textContent.includes("X") && 
            square[4].textContent.includes("X") &&
            square[7].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[1].textContent.includes("O") && 
            square[4].textContent.includes("O") &&
            square[7].textContent.includes("O")){
                alert("O Wins!");
            };
            if(square[2].textContent.includes("X") && 
            square[5].textContent.includes("X") &&
            square[8].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[2].textContent.includes("O") && 
            square[5].textContent.includes("O") &&
            square[8].textContent.includes("O")){
                alert("O Wins!");
            };


            if(square[0].textContent.includes("X") && 
            square[1].textContent.includes("X") &&
            square[2].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[0].textContent.includes("O") && 
            square[1].textContent.includes("O") &&
            square[2].textContent.includes("O")){
                alert("O Wins!");
            };
            if(square[3].textContent.includes("X") && 
            square[4].textContent.includes("X") &&
            square[5].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[3].textContent.includes("O") && 
            square[4].textContent.includes("O") &&
            square[5].textContent.includes("O")){
                alert("O Wins!");
            };
            if(square[6].textContent.includes("X") && 
            square[7].textContent.includes("X") &&
            square[8].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[6].textContent.includes("O") && 
            square[7].textContent.includes("O") &&
            square[8].textContent.includes("O")){
                alert("O Wins!");
            };


            if(square[0].textContent.includes("X") && 
            square[4].textContent.includes("X") &&
            square[8].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[0].textContent.includes("O") && 
            square[4].textContent.includes("O") &&
            square[8].textContent.includes("O")){
                alert("O Wins!");
            };
            if(square[2].textContent.includes("X") && 
            square[4].textContent.includes("X") &&
            square[6].textContent.includes("X")){
                alert("X Wins!");
            };
            if(square[2].textContent.includes("O") && 
            square[4].textContent.includes("O") &&
            square[6].textContent.includes("O")){
                alert("O Wins!");
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
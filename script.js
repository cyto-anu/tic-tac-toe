
//creates a gameboard with 3 rows of 3 empty arrays
const gameboard = (function () {
    return {row1:["","",""],row2:["","",""],row3:["","",""]};
})();



// players turn logic


const player1Choice = function () {
    
    const p1RowCol = lastClickedId1;
    const p1Row = Number(p1RowCol[0]);
    const p1Col = Number(p1RowCol[1]-1);

    if ((p1Row === 1) && (gameboard.row1[p1Col] === "")) {
        gameboard.row1[p1Col] = "X";
        updateGameboard();
    

    } else if ((p1Row === 2) && (gameboard.row2[p1Col] === "")) {
        gameboard.row2[p1Col] = "X";
        updateGameboard();
        

    } else if ((p1Row === 3) && (gameboard.row3[p1Col] === "")) {
        gameboard.row3[p1Col] = "X";
        updateGameboard();
    

    } else {
        console.log("this spot is taken! choose another!");
        player1Choice();
    };

};

const player2Choice = function () {

    const p2RowCol = lastClickedId2;
    const p2Row = Number(p2RowCol[0]);
    const p2Col = Number(p2RowCol[1]-1);

    if ((p2Row === 1) && (gameboard.row1[p2Col] === "")) {
        gameboard.row1[p2Col] = "O";
        updateGameboard();
      

    } else if ((p2Row === 2) && (gameboard.row2[p2Col] === "")) {
        gameboard.row2[p2Col] = "O";
        updateGameboard();
  

    } else if ((p2Row === 3) && (gameboard.row3[p2Col] === "")) {
        gameboard.row3[p2Col] = "O";
        updateGameboard();

        
    } else {
        console.log("this spot is taken! choose another!");
        player2Choice();

    };
};


//game win logic

const whoWon = function () {
    if (gameboard.row1[0] === "X" && gameboard.row1[1] === "X" && gameboard.row1[2] === "X") {
        return "Player 1";
    } else if (gameboard.row1[0] === "O" && gameboard.row1[1] === "O" && gameboard.row1[2] === "O") {
        return "Player 2";

    } else if (gameboard.row2[0] === "X" && gameboard.row2[1] === "X" && gameboard.row2[2] === "X") {
        return "Player 1";
    } else if (gameboard.row2[0] === "O" && gameboard.row2[1] === "O" && gameboard.row2[2] === "O") {
        return "Player 2";

    } else if (gameboard.row3[0] === "X" && gameboard.row3[1] === "X" && gameboard.row3[2] === "X") {
        return "Player 1";
    } else if (gameboard.row3[0] === "O" && gameboard.row3[1] === "O" && gameboard.row3[2] === "O") {
        return "Player 2";

    } else if (gameboard.row1[0] === "X" && gameboard.row2[0] === "X" && gameboard.row3[0] === "X") {
        return "Player 1";
    } else if (gameboard.row1[0] === "O" && gameboard.row2[0] === "O" && gameboard.row3[0] === "O") {
        return "Player 2";

    } else if (gameboard.row1[1] === "X" && gameboard.row2[1] === "X" && gameboard.row3[1] === "X") {
        return "Player 1";
    } else if (gameboard.row1[1] === "O" && gameboard.row2[1] === "O" && gameboard.row3[1] === "O") {
        return "Player 2";

    } else if (gameboard.row1[2] === "X" && gameboard.row2[2] === "X" && gameboard.row3[2] === "X") {
        return "Player 1";
    } else if (gameboard.row1[2] === "O" && gameboard.row2[2] === "O" && gameboard.row3[2] === "O") {
        return "Player 2";

    } else if (gameboard.row1[0] === "X" && gameboard.row2[1] === "X" && gameboard.row3[2] === "X") {
        return "Player 1";
    } else if (gameboard.row1[0] === "O" && gameboard.row2[1] === "O" && gameboard.row3[2] === "O") {
        return "Player 2";

    } else if (gameboard.row1[2] === "X" && gameboard.row2[1] === "X" && gameboard.row3[0] === "X") {
        return "Player 1";
    } else if (gameboard.row1[2] === "O" && gameboard.row2[1] === "O" && gameboard.row3[0] === "O") {
        return "Player 2";
    }

    // If no winner yet, return null
    return null;
};


/////dom manipuation

let boardContainer = document.querySelector(".gameboard");
let newGameBtn = document.querySelector(".newGameBtn");
let whoTurn = document.querySelector(".whoTurn");
let squares = document.querySelectorAll(".square");

function player1Click() {
    function oneClick(event) {
        event.target.textContent = "X";
        lastClickedId1 = event.target.id;
        player1Choice();

        // Removes event listener from all squares w one click
        squares.forEach(square => square.removeEventListener("click", oneClick));
    }

    // Attaches  event listener to each square
    squares.forEach(square => {
        square.addEventListener("click", oneClick);
    });
};


function player2Click() {
    function oneClick(event) {
        event.target.textContent = "X";
        lastClickedId1 = event.target.id;
        player2Choice();

        // Removes event listener from all squares w one click
        squares.forEach(square => square.removeEventListener("click", oneClick));
    }

    // Attaches event listener to each square
    squares.forEach(square => {
        square.addEventListener("click", oneClick);
    });

};

//function to reset the game board display and update gameboard in console;

newGameBtn.addEventListener("click", e => {
    resetGameboard();
});

function resetGameboard() {
    console.log("Gameboard has been reset!");
    squares[0].textContent = "";
    squares[1].textContent = "";
    squares[2].textContent = "";
    squares[3].textContent = "";
    squares[4].textContent = "";
    squares[5].textContent = "";
    squares[6].textContent = "";
    squares[7].textContent = "";
    squares[8].textContent = "";

    gameboard.row1[0] = "";
    gameboard.row1[1] = "";
    gameboard.row1[2] = "";
    gameboard.row2[0] = "";
    gameboard.row2[1] = "";
    gameboard.row2[2] = "";
    gameboard.row3[0] = "";
    gameboard.row3[1] = "";
    gameboard.row3[2] = "";

    playGame();
};

function updateGameboard() {

    squares[0].textContent = gameboard.row1[0];
    squares[1].textContent = gameboard.row1[1];
    squares[2].textContent = gameboard.row1[2];
    squares[3].textContent = gameboard.row2[0];
    squares[4].textContent = gameboard.row2[1];
    squares[5].textContent = gameboard.row2[2];
    squares[6].textContent = gameboard.row3[0];
    squares[7].textContent = gameboard.row3[1];
    squares[8].textContent = gameboard.row3[2];

};

let currentPlayer = "X"; // Start with player 1
whoTurn.textContent = "Player 1's turn";

function playGame() {
    squares.forEach(square => {
        square.addEventListener("click", handleTurn, { once: true }); // Ensures each square is only clicked once
    });
}

function handleTurn(event) {
    const square = event.target;
    
    if (square.textContent !== "") return; // Prevent clicking an already filled square

    if (currentPlayer === "X") {
        square.textContent = "X";
        lastClickedId1 = square.id;
        player1Choice();
    } else {
        square.textContent = "O";
        lastClickedId2 = square.id;
        player2Choice();
    }

    // Check if there's a winner
    let winner = whoWon();
    if (winner) {
        console.log(winner);
        whoTurn.textContent = `${winner} is the winner!`
        squares.forEach(sq => sq.removeEventListener("click", handleTurn));
        return;
    };

    // Switch player turn
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (currentPlayer === "X"){
        whoTurn.textContent = "Player 1's turn";
    } if (currentPlayer === "O"){
        whoTurn.textContent = "Player 2's turn";
    };
};

playGame();
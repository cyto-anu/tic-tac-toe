//assigns names to both players
const players = (function (player1 = "anu",player2 = "mag") {
    return {player1name:player1,player2name:player2};
})();

//creates a gameboard with 3 rows of 3 empty arrays
const gameboard = (function () {
    return {row1:["empty","empty","empty"],row2:["empty","empty","empty"],row3:["empty","empty","empty"]};
})();

//function to reset the game board

function resetGameboard() {
    gameboard.row1 = ["empty", "empty", "empty"];
    gameboard.row2 = ["empty", "empty", "empty"];
    gameboard.row3 = ["empty", "empty", "empty"];
    console.log("Gameboard has been reset!");
};

// players turn logic

const player1Choice = function () {
    const p1RowCol = prompt ("Player 1 go");
    const p1Row = Number(p1RowCol[0]);
    const p1Col = Number(p1RowCol[1]-1);

    if ((p1Row === 1) && (gameboard.row1[p1Col] === "empty")) {
        gameboard.row1[p1Col] = "X";

    } else if ((p1Row === 2) && (gameboard.row2[p1Col] === "empty")) {
        gameboard.row2[p1Col] = "X";

    } else if ((p1Row === 3) && (gameboard.row3[p1Col] === "empty")) {
        gameboard.row3[p1Col] = "X";

    } else {
        console.log("this spot is taken! choose another!");
        player1Choice();
    };

};

const player2Choice = function () {
    const p2RowCol = prompt ("Player 2 go");
    const p2Row = Number(p2RowCol[0]);
    const p2Col = Number(p2RowCol[1]-1);

    if ((p2Row === 1) && (gameboard.row1[p2Col] === "empty")) {
        gameboard.row1[p2Col] = "O";

    } else if ((p2Row === 2) && (gameboard.row2[p2Col] === "empty")) {
        gameboard.row2[p2Col] = "O";

    } else if ((p2Row === 3) && (gameboard.row3[p2Col] === "empty")) {
        gameboard.row3[p2Col] = "O";
        
    } else {
        console.log("this spot is taken! choose another!");
        player2Choice();

    };
};


const playGame = function (){

    let winner = null;

    while (!winner) {

        player1Choice();
        winner = whoWon();

        if (winner) break;

        player2Choice();
        winner = whoWon();
    };

    console.log(winner);
    return playAgain();
    
};

//play again function
const playAgain = function () {
    if (prompt("wanna play again?")==="yes"){
        resetGameboard();
        return playGame();
    } else {
        return gameboard;
    };
};

//game win logic

const whoWon = function () {
    if (gameboard.row1[0] === "X" && gameboard.row1[1] === "X" && gameboard.row1[2] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row1[0] === "O" && gameboard.row1[1] === "O" && gameboard.row1[2] === "O") {
        return `${players.player2name} wins!`;

    } else if (gameboard.row2[0] === "X" && gameboard.row2[1] === "X" && gameboard.row2[2] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row2[0] === "O" && gameboard.row2[1] === "O" && gameboard.row2[2] === "O") {
        return `${players.player2name} wins!`;

    } else if (gameboard.row3[0] === "X" && gameboard.row3[1] === "X" && gameboard.row3[2] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row3[0] === "O" && gameboard.row3[1] === "O" && gameboard.row3[2] === "O") {
        return `${players.player2name} wins!`;

    } else if (gameboard.row1[0] === "X" && gameboard.row2[0] === "X" && gameboard.row3[0] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row1[0] === "O" && gameboard.row2[0] === "O" && gameboard.row3[0] === "O") {
        return `${players.player2name} wins!`;

    } else if (gameboard.row1[1] === "X" && gameboard.row2[1] === "X" && gameboard.row3[1] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row1[1] === "O" && gameboard.row2[1] === "O" && gameboard.row3[1] === "O") {
        return `${players.player2name} wins!`;

    } else if (gameboard.row1[2] === "X" && gameboard.row2[2] === "X" && gameboard.row3[2] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row1[2] === "O" && gameboard.row2[2] === "O" && gameboard.row3[2] === "O") {
        return `${players.player2name} wins!`;

    } else if (gameboard.row1[0] === "X" && gameboard.row2[1] === "X" && gameboard.row3[2] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row1[0] === "O" && gameboard.row2[1] === "O" && gameboard.row3[2] === "O") {
        return `${players.player2name} wins!`;

    } else if (gameboard.row1[2] === "X" && gameboard.row2[1] === "X" && gameboard.row3[0] === "X") {
        return `${players.player1name} wins!`;
    } else if (gameboard.row1[2] === "O" && gameboard.row2[1] === "O" && gameboard.row3[0] === "O") {
        return `${players.player2name} wins!`;
    }

    // If no winner yet, return null
    return null;
};


/////dom manipuation

let boardContainer = document.querySelector(".gameboard");
let srBtn = document.querySelector(".srBtn");

boardContainer.addEventListener("click", event => {
    console.log("hi");
});

srBtn.addEventListener("click", e => {
    ;
});



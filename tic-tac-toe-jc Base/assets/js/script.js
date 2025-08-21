class TicTacToe{
    constructor(){
        this.board = Array(9).fill("");
        this.currentPlayer = "X";
        this.scores = {
            X: 0,
            O: 0
        }
        this.gameActive = true;

        this.winningConditions = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8], //Filas
            [0, 3, 6],[1, 4, 7],[2, 5, 8], //COlumnas
            [0, 4, 8],[2, 4, 6] //Diagonales
        ];

        this.initGame();
    }

    initGame(){
        this.cells = document.querySelectorAll(".cell");
        this.currentPlayerDisplay = document.getElementById("current-player");
        this.resetBtn = document.getElementById("reset-btn");
        this.newGameBtn = document.getElementById("new-game-btn");
        this.scoreX = document.getElementById("score-x");
        this.scoreO = document.getElementById("score-o");

    }
}

document.addEventListener('DOMContentLoaded',()=>{
    new TicTacToe();
});

class TicTacToe {
    constructor() {
        this.board = Array(9).fill("");
        this.currentPlayer = "X";
        this.gameActive = true;
        this.scores = {
            X: 0,
            O: 0
        }

        this.winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //COlumnas
            [0, 4, 8], [2, 4, 6] //Diagonales
        ];

        this.initGame();
    }

    initGame() {
        this.cells = document.querySelectorAll(".cell");
        this.currentPlayerDisplay = document.getElementById("current-player");
        this.resetBtn = document.getElementById("reset-btn");
        this.newGameBtn = document.getElementById("new-game-btn");
        this.scoreX = document.getElementById("score-x");
        this.scoreO = document.getElementById("score-o");
        this.gameStatus = document.getElementById("game-status");

        // const titulo = document.getElementById("game-title");
        // titulo.textContent = "tateti";
        // titulo.addEventListener("click", () => {
        //     titulo.style.color = "red";
        // })


        this.addEventListeners();
        this.updateDisplay();
    }

    addEventListeners() {
        this.cells.forEach(cell => {
            cell.addEventListener("click", this.handleCellClick.bind(this));
        });

        this.resetBtn.addEventListener("click", this.resetGame.bind(this));
        this.newGameBtn.addEventListener("click", this.newGame.bind(this));
    }

    handleCellClick(event) {
        const cell = event.target;
        const index = parseInt(cell.getAttribute("data-index"));

        if (this.board[index] !== "" || !this.gameActive) {
            return;
        }

        this.makeMove(index, cell);
    }

    updateDisplay() {
        this.currentPlayerDisplay.textContent = this.currentPlayer;
        this.currentPlayerDisplay.style.color = (this.currentPlayer === 'X') ? 'red' : 'blue'; // Cambia el color según el jugador
    }

    makeMove(index, cell) { // Realiza el movimiento del jugador actual
        this.board[index] = this.currentPlayer; // Marca la celda en el tablero
        cell.textContent = this.currentPlayer; // Muestra el símbolo en la celda
        cell.classList.add(this.currentPlayer.toLowerCase()); // Agrega clase para estilos

        if (this.checkWinner()) { // Si hay ganador
            this.handleGameEnd('win'); // Maneja el fin del juego como victoria
        } else if (this.checkDraw()) { // Si hay empate
            this.handleGameEnd('draw'); // Maneja el fin del juego como empate
        } else {
            this.switchPlayer(); // Cambia de jugador
        }
    }

    checkWinner() {
        for (const condition of this.winningConditions) {
            const [a, b, c] = condition;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.highlightWiningCondition(condition);
                return true;
            }
        }
        return false;
    }

    checkDraw() {
        return this.board.every(cell => cell !== "");
    }

    highlightWiningCondition(winningCondition) {
        winningCondition.forEach(index => {
            this.cells[index].classList.add("winning");
        })
    }

    handleGameEnd(gameResult) {
        this.gameActive = false;

        if (gameResult == "win") {
            this.scores[this.currentPlayer]++;
            this.gameStatus.textContent = `Player ${this.currentPlayer} wins!`;
        } else {
            this.gameStatus.textContent = "Draw!";
        }

        this.updateDisplayScores();
    }

    switchPlayer() {
        this.currentPlayer = (this.currentPlayer === "X") ? "O" : "X";
        this.updateDisplay();
    }

    updateDisplayScores() {
        this.scoreX.textContent = this.scores.X;
        this.scoreO.textContent = this.scores.O;
    }

    resetGame() {
        this.board = Array(9).fill("");
        this.currentPlayer = "X";
        this.gameActive = true;

        // for(cell of this.cells){ //Programacion Imperativa
        //     cell.textContent = "";
        //     cell.classList.remove("x", "o", "winning");
        // }

        this.cells.forEach(cell => { //Programacion Funcional
            cell.textContent = "";
            cell.classList.remove("x", "o", "winning");
        })

        this.gameStatus.textContent = "";
        this.updateDisplay();
    }

    newGame() {
        this.resetGame();
        this.scores = {
            X: 0,
            O: 0
        }
        this.updateDisplayScores();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});

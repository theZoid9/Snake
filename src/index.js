import { startGame } from "./game";



const cells = [];

function createBoard() {
    const board = document.getElementById("board");
    const gridSize = 20;

    // Create 400 cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
        cells.push(cell);
    }
}



createBoard();
startGame();
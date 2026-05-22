// this is where all the javascript for display will go, if it gets bloated I will break it off into separate JS classes


const generateGrid = (containerID, size = 10) => {
    const container = document.querySelector(containerID);
    container.innerHTML = "";
    
    // Create an (size+1) x (size+1) grid
    for (let row = 0; row <= size; row++) {
        for (let col = 0; col <= size; col++) {
            const cell = document.createElement("div");
            
            if (row === 0 && col === 0) {
                // Top‑left corner (empty)
                cell.classList.add("corner");
                cell.textContent = "";
            } else if (row === 0) {
                // Column labels (A, B, C...)
                cell.classList.add("col-label");
                cell.textContent = String.fromCharCode(64 + col); // A = 65
            } else if (col === 0) {
                // Row labels (1, 2, 3...)
                cell.classList.add("row-label");
                cell.textContent = row;
            } else {
                // Game cells
                cell.classList.add("cell");
                cell.dataset.row = row - 1;  // Store 0‑based row
                cell.dataset.col = col - 1;  // Store 0‑based col
            }
            container.appendChild(cell);
        }
    }
};

// only used for intial creation of grids, no re-initalization 
const generateGrids = () =>{
    generateGrid("#playerBoard");
    generateGrid("#enemyBoard");
}


export { generateGrids };
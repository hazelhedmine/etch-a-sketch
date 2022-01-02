const grid = document.querySelector("#grid");

function makeGrid(row, col) {
  grid.style.setProperty("--grid-rows", row);
  grid.style.setProperty("--grid-cols", col);
  for (let c = 0; c < row * col; c++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.addEventListener("mouseover", changeGridToBlack);
    //cell.textContent = c + 1;
    grid.appendChild(cell);
  }
  console.log(`Grid of size ${row} has been created!`);
}

makeGrid(16, 16);

function changeGridToBlack(e) {
  //Use event delegation
  e.target.style.backgroundColor = "black";
}

// --|| Restart grid

const restartBtn = document.querySelector("#restart-btn");
restartBtn.addEventListener("click", function () {
  const gridSize = window.prompt("Grid size: ");
  removeGrid();
  makeGrid(gridSize, gridSize);
  //clearGrid();
});

function removeGrid() {
  const cells = document.querySelectorAll(".grid-item");

  cells.forEach(function (cell) {
    cell.remove();
  });
}

// --|| Clear grid

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", function () {
  clearGrid();
});

function clearGrid() {
  const cells = document.querySelectorAll(".grid-item");

  cells.forEach(function (cell) {
    cell.style.backgroundColor = "white";
  });
}

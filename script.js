const container = document.querySelector("#container");

function makeGrid(row, col) {
  container.style.setProperty("--grid-rows", row);
  container.style.setProperty("--grid-cols", col);
  for (let c = 0; c < row * col; c++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    //cell.textContent = c + 1;
    container.appendChild(cell);
  }
  console.log(`Grid of size ${row} has been created!`);
}

makeGrid(16, 16);

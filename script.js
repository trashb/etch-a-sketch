const gridContainer = document.querySelector("#grid-container");

function setDefaultSize() {
    setSize(16);
    fillGrid(16);
};

function setSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  };
  
function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridContainer.appendChild(gridElement);
    changeColour();
  };
};

function changeSize() {
    let newSize = prompt("Set a new gird size:");
    newSize = parseInt(newSize);
    if (newSize < 3 || newSize > 100 || Number.isNaN(newSize) || newSize==null) {
        alert("Invalid Input!");
        changeSize();
    } else {
        clearGrid();
        setSize(newSize);
        fillGrid(newSize);
    };
};

function changeColour() {
    let squares = gridContainer.querySelectorAll("div")
    squares.forEach(function(square){
        square.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "gray";
        });
    });
};

function clearGrid() {
    let squares = gridContainer.querySelectorAll("div")
    squares.forEach(function(square){
        square.style.backgroundColor = "white";
    });
}

setDefaultSize();

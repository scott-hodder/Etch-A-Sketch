const container = document.getElementById("container");


var sizeSquares = prompt("How many squares would you like to have? (Max of 100)");

function makeGrid(sizeSquares, sizeSquares) {

    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }

// random background color function



// Creates the grid
  container.style.setProperty('--grid-rows', sizeSquares);
  container.style.setProperty('--grid-cols', sizeSquares);
  container.style.width = "960px";
  container.style.overflow = "hidden";
  for (i = 0; i < (sizeSquares * sizeSquares); i++) {
    let square = document.createElement("div");
    square.style.minHeight = "0";
    square.style.minWidth = "0";
    square.style.overflow = "hidden";
    // square.innerText = (i + 1);
    container.appendChild(square).className = "grid-item";
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
        //console.log(square):
    })
    
}


    createButton ();
     //fills the squares
function createButton () {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid!";
    resetButton.style.margin = "20px";
    resetButton.style.borderRadius = "10px";
    buttonDiv.appendChild(resetButton);
    //add event listener for reset button
    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e=> e.remove());
        let userGridInput = prompt("Please enter the number of grid squares (Max: 100): ")
        if (userGridInput > 100) {
            alert("ERROR! You specified a grid size larger than the max of 100");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}

  


};
makeGrid(sizeSquares, sizeSquares); 

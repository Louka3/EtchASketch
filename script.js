//Start with querySelectors for the buttons  
const clearButton = document.querySelector("#clear-button")
const gridButton = document.querySelector('#new-grid-count')

clearButton.addEventListener('click',clearBoardColor)
gridButton.addEventListener('click', newGrid)

//make the initial 16x16 board
makeGrid(16)

function makeGrid(sideLength){ //function to actually make the grid
    let totalSquares = (sideLength * sideLength)
    const gridContainer = document.getElementById('grid-container')

    gridContainer.style.gridTemplateColumns = 'repeat($side,1fr)'.replace('$side', sideLength)
    gridContainer.style.gridTemplateRows = 'repeat($side,1fr)'.replace('$side', sideLength)
  
    for (let i = 0;i < totalSquares; i++){
        let square = document.createElement('div');
        square.className = "grid-square"
        square.addEventListener('mouseover', changeColor.bind(this, square))
        gridContainer.append(square)
    }
}

function changeColor(square){ //function to change square color on hover
    let randColor = randomColor()
    square.setAttribute('style', 'background-color: rgb'.replace('rgb',randColor))
}

function clearBoardColor(){ //function to clear the board of color
    board = document.querySelectorAll('.grid-square')
    /* need to treat this as an array and iterate thru it to assign each square a
    background color of transparent */
    for (let b = 0; b < board.length; b++){
        board[b].setAttribute('style', 'background-color: transparent')
    }
}

function newGrid(){ //function to make a new grid with custom side length
    let num = prompt("How big do you want each side of the grid(up to 100)?") 
    document.querySelectorAll('.grid-square').forEach(sq => sq.remove());
    makeGrid(num) 
}

function randomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgb = "rgb(" + red + "," + green + "," + blue +")"
    return rgb
}
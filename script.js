//Only working with certain numbers. Need to look into CSS Grid and fr1 (fractions) for
//the square lengths. Seems to work better for people than what I'm trying to do

const container = document.querySelector("#container")
const gridContainer = document.querySelector("#grid-container")
const clearButton = document.querySelector("#clear-button")
const gridButton = document.querySelector('#new-grid-count')


clearButton.addEventListener('click',clearBoard)
gridButton.addEventListener('click', newGrid)

/* Need a loop to create 16 square divs to make my Etch-A-Sketch Grid */
makeGrid(256)

function makeGrid(squares){
    for (let i = 0;i < squares; i++){
        let square = document.createElement('div');
        square.className = "grid-square"
        square.addEventListener('mouseover', changeColor.bind(this, square))
        gridContainer.append(square)
}
}
function changeColor(square){
    square.setAttribute('style', 'background-color: orange')
}

function clearBoard(){
    board = document.querySelectorAll('.grid-square')
    /* need to treat this as an array and iterate thru it to assign each square a
    background color of transparent */
    for (let b = 0; b < board.length; b++){
        board[b].setAttribute('style', 'background-color: transparent')
    }
}

function newGrid(){
    //num is the number of squares per side. Default at start of program is 16
    let num = prompt("How big do you want the grid(side length)?")
    makeGrid((num * num))
    squares = document.querySelectorAll('.grid-square')
    //square root (921,600 / num^2)
    let newGridLength = Math.sqrt(921600 / Math.pow(num, 2)).toFixed(1)
    for (let b = 0; b < squares.length; b++){
        squares[b].setAttribute('style', 'grid-template-columns: repreat(' + 
            newGridLength.toString() + ', 1fr); grid-template-rows: repeat(' + 
            newGridLength.toString() + ', 1fr);')
    }
}

/* Need a loop to create 16 square divs to make my Etch-A-Sketch Grid */

const container = document.querySelector("#container")
const gridContainer = document.querySelector("#grid-container")
const clearButton = document.querySelector("#clear-button")
const gridButton = document.querySelector('#new-grid-count')

clearButton.addEventListener('click',clearBoard)
gridButton.addEventListener('click', newGrid.bind(this,"?"))


for (let i = 0;i < 256; i++){
    // for (let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.className = "grid-square"
    square.addEventListener('mouseover', changeColor.bind(this, square))
    gridContainer.append(square)
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

function newGrid(num){
    //num is the number of squares per side. Default at start of program is 4


}

const container = document.querySelector("#container")
const gridContainer = document.getElementById('grid-container')
const clearButton = document.querySelector("#clear-button")
const gridButton = document.querySelector('#new-grid-count')


clearButton.addEventListener('click',clearBoard)
gridButton.addEventListener('click', newGrid)

makeGrid(256)

function makeGrid(squares){
    let squaresPerSide = (Math.sqrt(squares));

    gridContainer.style.gridTemplateColumns = 'repeat($sps,1fr)'.replace('$sps', squaresPerSide)
    gridContainer.style.gridTemplateRows = 'repeat($sps,1fr)'.replace('$sps', squaresPerSide)
  
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
    document.querySelectorAll('.grid-square').forEach(sq => sq.remove());
    let num = prompt("How big do you want the grid(side length)?")
    makeGrid((num * num))    
}

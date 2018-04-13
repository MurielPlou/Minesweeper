const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
   const row = [];
   for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
     row.push(' ');
   }
   board.push(row);
}
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
   const row = [];
   for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
     row.push(null);
   }
   board.push(row);
}

let numberOfBombsPlaced = 0;
while (numberOfBombsPlaced < numberOfBombs){
  const randomRowIndex = Math.floor(Math.random() * numberOfRows)
  const randomColumnIndex = Math.floor(Math.random() * numberOfColumns)
  //Check to make sure bombs were not put on top of bombs
  if (board[randomRowIndex][randomColumnIndex] !== 'B') {
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced ++;
  }
}
  return board;
};

const getNumberOfSurroundingBombs = (bombBoard, flipRow, flipColumn) =>{  //create offsets for columns
  const neighborOffsets = [[0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1], [-1,0], [-1,1]];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;

  let numberOfSurroundingBombs = 0;
  neighborOffsets.forEach(neighborOffsets => {
    const neighborRowIndex = flipRow + neighborOffsets[0];
    const neighborColumnIndex = flipColumn + neighborOffsets[1];
//Check to see if row and column are valid tile values on board
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
        numberOfSurroundingBombs++;
      }
    }
  });

  return numberOfSurroundingBombs;

}

const flipTile = (playerBoard, bombBoard, flipRow, flipColumn) => {
  //Check if tile is already flipped, if so return
  if (playerBoard[flipRow][flipColumn] !== ' ') {
    return;
}
  //Check if tile is bomb, if so place bomb on playerBoard
  if (bombBoard[flipRow][flipColumn] === 'B') {
    playerBoard[flipRow][flipColumn] = 'B';
} else{  //If tile is not bomb, place number of surrounding bombs on playerBoard
    playerBoard[flipRow][flipColumn] = getNumberOfSurroundingBombs(bombBoard, flipRow, flipColumn);
}
};


const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

const playerBoard = generatePlayerBoard(3, 3);
const bombBoard = generateBombBoard(3, 3, 3);

printBoard(bombBoard);
console.log(getNumberOfSurroundingBombs(bombBoard, 0, 0));

/*console.log('PlayerBoard: ');
printBoard(playerBoard);
console.log('BombBoard: ');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 1, 1);
printBoard(playerBoard);
printBoard(playerBoard);
*/

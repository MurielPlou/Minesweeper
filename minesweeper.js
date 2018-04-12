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

  board[randomRowIndex][randomColumnIndex] = 'B';

  numberOfBombsPlaced ++;
}
  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 3);
const bombBoard = generateBombBoard(3, 2, 2);

printBoard(playerBoard);

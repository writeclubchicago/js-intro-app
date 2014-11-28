 // for (var i = 0; i < numberOfBoxes; i += rowLength) {
  //   win = true;
  //   var startBox = i;
  //   checkSquares(startBox, player, (startBox + rowLength), 1); // checks rows
  //   if (win) {
  //     alert("Player " + player + " wins!");
  //   }
  // }
 
  // for (var i = 0; i < rowLength; i++) {
  //   win = true;
  //   startBox = i;
  //   checkSquares(startBox, player, numberOfBoxes, rowLength); // checks columns
  //   if (win) {
  //     alert("Player " + player + " wins!");
  //   }
  // }

  // for (var i = 0; i < 1; i++) {
  //   win = true;
  //   startBox = i;
  //   checkSquares(startBox, player, numberOfBoxes, (rowLength+1));
  //   if (win) {
  //     alert("Player " + player + " wins!");
  //   }
  // }

  // for (var i = (rowLength-1); i < rowLength; i++) {
  //   win = true;
  //   startBox = i;
  //   checkSquares(startBox, player, (numberOfBoxes-rowLength+1), (rowLength-1));
  //   if (win) {
  //     alert("Player " + player + " wins!");
  //   }
  // }
 
  // for (var i = 0; i < numberOfRows; i++) {
  //   checkSquares(i, player, numberOfBoxes, diagonalBackSlashIterator);
  //   // check one diagonal
  // }
 
  // for (var i = 0; i < numberOfRows; i++) {
  //   checkSquares(i, player, numberOfBoxes, diagonalForwardSlashIterator);
  //   //check the other diagonal
  // }
 
  // for (var i = 0; i < rowLength; i++) {
  //   if (boxesClicked[i] === player && boxesClicked[i+rowLength] === player && boxesClicked[i+(rowLength*(numberOfRows-1))] === player) {
  //     win = true;
  //   }
  // }
  // if (boxesClicked[0] === player && boxesClicked[rowLength+1] && boxesClicked[numberOfRows*(rowLength+1)]) {
  //   win = true;
  // } else if (boxesClicked[rowLength-1] === player && boxesClicked[(i-1)*(rowLength-1)] === player && boxesClicked[numberOfRows*(rowLength-1)] === player) {
  //   win = true;
  // }

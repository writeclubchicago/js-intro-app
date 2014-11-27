// 1. click on each one fills with Xs
// 2. as you click on empty, switches Xs and Os
// 3. make it so someone wins

var playerOne = "X"
var playerTwo = "O"
var boxesClicked = [];
var turn = 1;
var numberOfBoxes = 9;
var rowLength = 3;
var numberOfRows = 3;

function ticTacToe(boxNumber, box) {
  
  if (boxUnclicked(boxNumber)) {
    if (turn % 2) {
    box.innerHTML = playerOne;
    boxesClicked[boxNumber] = playerOne;
    checkWin(playerOne);
    } else {
    box.innerHTML = playerTwo;
    boxesClicked[boxNumber] = playerTwo;
    checkWin(playerTwo);
    }
    console.log(turn);
    turn++;
  }
}

function boxUnclicked(boxNumber) {
  return !boxesClicked[boxNumber];
}

function checkWin(player) {
  var win = false;
  for (var i = 0; i < (numberOfBoxes-1); i += rowLength) {
    if (boxesClicked[i] === player && boxesClicked[i+1] === player && boxesClicked[i+2] === player) {
      win = true;
    }
  }

  for (var i = 0; i < rowLength; i++) {
    if (boxesClicked[i] === player && boxesClicked[i+rowLength] === player && boxesClicked[i+(rowLength*(numberOfRows-1))] === player) {
      win = true;
    }
  }
  if (boxesClicked[0] === player && boxesClicked[rowLength+1] && boxesClicked[numberOfRows*(rowLength+1)]) {
    win = true;
  } else if (boxesClicked[rowLength-1] === player && boxesClicked[(i-1)*(rowLength-1)] === player && boxesClicked[numberOfRows*(rowLength-1)] === player) {
    win = true;
  }
  if (win) {
    alert("Player " + player + " wins!");
  }
}
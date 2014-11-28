var playerOne = "X"
var playerTwo = "O"
var boxesClicked =  [];
var turn = 1;
var rowLength = 3;
var numberOfRows = rowLength;
var numberOfBoxes = rowLength * numberOfRows;
var win = true;
 
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
    turn++;
  }
}
 
function boxUnclicked(boxNumber) {
  return !boxesClicked[boxNumber];
}
 
function checkWin(player) {
  var winCons = [[0, numberOfBoxes, rowLength], [0, rowLength, 1], [0, 1, 1], [(rowLength-1), rowLength, 1]];

  for (var i = 0; i < winCons.length; i++) {
    for (var j = winCons[i][0]; j < winCons[i][1]; j += winCons[i][2]) {
      win = true;
      configurations = [[(j+rowLength), 1], [numberOfBoxes, rowLength], [numberOfBoxes, (rowLength+1)], [((numberOfBoxes-rowLength)+1), (rowLength-1)]];

      checkSquares(j, player, (configurations[i][0]), (configurations[i][1]));
      if (win) {
        alert("Player " + player + " wins!");
      }
    }
  }
}

function checkSquares(box, player, length, iterator) {
  for (var k = box; k < length; k += iterator) {
    if (boxesClicked[k] !== player) {
      win = false;
    }
  }
}

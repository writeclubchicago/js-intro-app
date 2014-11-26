var numberOfCorrectBox = 0

function clickNumber(boxNumber, box){
  if (boxNumber===numberOfCorrectBox){
    numberOfCorrectBox++;
    box.style["background-color"] = "red";
  };
  checkIfWon();
}

function checkIfWon() {
  var won = false;

  if (numberOfCorrectBox === 10)
    {won = true};
  

  if (won) {
    alert("You've won!");
  }
}
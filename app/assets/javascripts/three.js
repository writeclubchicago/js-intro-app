var boxesFilled = [];
var numberOfBoxesToFill = 3;

function fillBox(boxNumber, box) {
  box.style["background-color"] = "pink";
  boxesFilled[boxNumber] = true;

  if(checkIfWon()) {
    alert("You win!");
  }
  
}

function checkIfWon() {
  var won = true;
  for(var i = 0; i < numberOfBoxesToFill; i++) {
    if(!boxesFilled[i]) {
      won = false;
    }
  }
  return won;
}
// ["clicked", undefined, "clicked"]
var boxesClicked = [];
var numberOfBoxesToClick = 3;

function clickBox(boxNumber, box) {
  box.style["background-color"] = "pink";

  boxesClicked[boxNumber] = "clicked";

  checkIfWon();

}

function checkIfWon() {
  var won = true;
  for(var i = 0; i < numberOfBoxesToClick; i++) {
    if(!boxesClicked[i]) {
      won = false;
    }
  }

  if (won) {
    alert("You've won!");
  }
}
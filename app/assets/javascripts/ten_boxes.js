var boxesClicked = [];
var boxesToClick = 10;

function clickBox(boxNumber, box){
  winningColor(box);

  checkForWin(boxNumber, box);
}

function winningColor(box){
  box.style["background-color"] = "green";
}

function fail(){
  for(var i = 0; i < boxesToClick; i++){
    box.style["background-color"] = "blue";
  }
}

function checkForWin(boxNumber, box){
  var win = true;

  for(var i = 0; i < boxesToClick; i++){
    if ((!boxesClicked[i]) && (boxesClicked[i+1])){
      fail();
      win = false;
    }

    if (win){
      alert("You've won!");
    }
  }
}